const { createCanvas } = require('canvas');
const GIFEncoder = require('gif-encoder-2');
const fs = require('fs');
const path = require('path');

const WIDTH = 1080;
const HEIGHT = 1080;
const TOTAL_FRAMES = 36;
const FRAME_DELAY = 80; // ~12fps, smooth loop

// Flat color palette - no gradients, GIF-friendly
const BG = '#0b1120';
const TEAL = '#14b8a6';
const TEAL_DIM = '#0d6b63';
const SKY = '#38bdf8';
const SKY_DIM = '#1e6a9e';
const PURPLE = '#a78bfa';
const PURPLE_DIM = '#5b4a8a';
const WHITE = '#e2e8f0';
const WHITE_DIM = '#475569';

const CENTER = { x: 540, y: 540 };

// 8 nodes arranged symmetrically around center for square layout
const NODES = [
  { x: 540, y: 160, r: 32, color: TEAL, dim: TEAL_DIM, icon: 'star' },        // Skills (top)
  { x: 810, y: 270, r: 32, color: SKY, dim: SKY_DIM, icon: 'code' },          // Projects (top-right)
  { x: 920, y: 540, r: 30, color: PURPLE, dim: PURPLE_DIM, icon: 'briefcase' },// Experience (right)
  { x: 810, y: 810, r: 30, color: SKY, dim: SKY_DIM, icon: 'mail' },          // Contact (bottom-right)
  { x: 540, y: 920, r: 32, color: TEAL, dim: TEAL_DIM, icon: 'person' },      // Background (bottom)
  { x: 270, y: 810, r: 30, color: PURPLE, dim: PURPLE_DIM, icon: 'pen' },     // UX Design (bottom-left)
  { x: 160, y: 540, r: 30, color: TEAL, dim: TEAL_DIM, icon: 'brain' },       // AI (left)
  { x: 270, y: 270, r: 30, color: SKY, dim: SKY_DIM, icon: 'rocket' },        // Delivery (top-left)
];

function drawIcon(ctx, x, y, icon, color, scale) {
  const s = scale || 1;
  ctx.strokeStyle = rgba(color, 0.9);
  ctx.fillStyle = rgba(color, 0.9);
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  switch (icon) {
    case 'star': {
      // 5-point star
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const outerAngle = (i * 4 * Math.PI / 5) - Math.PI / 2;
        const innerAngle = outerAngle + (2 * Math.PI / 10);
        ctx.lineTo(x + Math.cos(outerAngle) * 10 * s, y + Math.sin(outerAngle) * 10 * s);
        ctx.lineTo(x + Math.cos(innerAngle) * 5 * s, y + Math.sin(innerAngle) * 5 * s);
      }
      ctx.closePath();
      ctx.stroke();
      break;
    }
    case 'code': {
      // Code brackets < / >
      ctx.beginPath(); ctx.moveTo(x - 5*s, y - 8*s); ctx.lineTo(x - 11*s, y); ctx.lineTo(x - 5*s, y + 8*s); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x + 5*s, y - 8*s); ctx.lineTo(x + 11*s, y); ctx.lineTo(x + 5*s, y + 8*s); ctx.stroke();
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(x + 2*s, y - 9*s); ctx.lineTo(x - 2*s, y + 9*s); ctx.stroke();
      ctx.lineWidth = 2;
      break;
    }
    case 'briefcase': {
      // Briefcase
      ctx.strokeRect(x - 10*s, y - 5*s, 20*s, 13*s);
      ctx.beginPath(); ctx.moveTo(x - 4*s, y - 5*s); ctx.lineTo(x - 4*s, y - 9*s); ctx.lineTo(x + 4*s, y - 9*s); ctx.lineTo(x + 4*s, y - 5*s); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x - 10*s, y + 1*s); ctx.lineTo(x + 10*s, y + 1*s); ctx.stroke();
      break;
    }
    case 'mail': {
      // Envelope
      ctx.strokeRect(x - 10*s, y - 6*s, 20*s, 13*s);
      ctx.beginPath(); ctx.moveTo(x - 10*s, y - 6*s); ctx.lineTo(x, y + 2*s); ctx.lineTo(x + 10*s, y - 6*s); ctx.stroke();
      break;
    }
    case 'person': {
      // Person silhouette
      ctx.beginPath(); ctx.arc(x, y - 4*s, 5*s, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x - 9*s, y + 10*s); ctx.quadraticCurveTo(x - 9*s, y + 3*s, x, y + 3*s); ctx.quadraticCurveTo(x + 9*s, y + 3*s, x + 9*s, y + 10*s); ctx.stroke();
      break;
    }
    case 'pen': {
      // Pen/pencil tool (UX design)
      ctx.beginPath();
      ctx.moveTo(x + 7*s, y - 9*s);
      ctx.lineTo(x + 10*s, y - 6*s);
      ctx.lineTo(x - 6*s, y + 8*s);
      ctx.lineTo(x - 9*s, y + 11*s);
      ctx.lineTo(x - 9*s, y + 8*s);
      ctx.closePath();
      ctx.stroke();
      // Pen tip line
      ctx.beginPath(); ctx.moveTo(x + 5*s, y - 7*s); ctx.lineTo(x - 8*s, y + 6*s); ctx.stroke();
      break;
    }
    case 'brain': {
      // Brain/AI - simplified neural
      ctx.beginPath(); ctx.arc(x, y, 8*s, 0, Math.PI * 2); ctx.stroke();
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(x, y - 8*s); ctx.lineTo(x, y + 8*s); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x - 6*s, y - 4*s); ctx.quadraticCurveTo(x, y - 10*s, x + 6*s, y - 4*s); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x - 6*s, y + 4*s); ctx.quadraticCurveTo(x, y + 10*s, x + 6*s, y + 4*s); ctx.stroke();
      ctx.lineWidth = 2;
      break;
    }
    case 'rocket': {
      // Rocket/delivery
      ctx.beginPath();
      ctx.moveTo(x, y - 10*s);
      ctx.lineTo(x + 5*s, y + 2*s);
      ctx.lineTo(x + 3*s, y + 2*s);
      ctx.lineTo(x + 3*s, y + 7*s);
      ctx.lineTo(x - 3*s, y + 7*s);
      ctx.lineTo(x - 3*s, y + 2*s);
      ctx.lineTo(x - 5*s, y + 2*s);
      ctx.closePath();
      ctx.stroke();
      // Flame
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(x - 2*s, y + 7*s); ctx.lineTo(x, y + 11*s); ctx.lineTo(x + 2*s, y + 7*s); ctx.stroke();
      ctx.lineWidth = 2;
      break;
    }
  }
  ctx.lineCap = 'butt';
  ctx.lineJoin = 'miter';
}

// Connections: center-to-node + node-to-node mesh
const CENTER_LINKS = NODES.map((_, i) => i); // all connected to center
const MESH_LINKS = [[0, 6], [0, 5], [1, 7], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0], [7, 1]];

function lerp(a, b, t) { return a + (b - a) * t; }

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function rgba(hex, a) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r},${g},${b},${a})`;
}

function drawFrame(ctx, frame) {
  const t = frame / TOTAL_FRAMES; // 0..1 normalized time

  // Solid dark background
  ctx.fillStyle = BG;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Very subtle dot grid (not lines - crisper in GIF)
  ctx.fillStyle = rgba(TEAL, 0.06);
  for (let gx = 30; gx < WIDTH; gx += 60) {
    for (let gy = 30; gy < HEIGHT; gy += 60) {
      ctx.fillRect(gx, gy, 1, 1);
    }
  }

  // === CONNECTIONS ===

  // Mesh links (dim, static)
  MESH_LINKS.forEach(([a, b]) => {
    ctx.strokeStyle = rgba(WHITE, 0.06);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(NODES[a].x, NODES[a].y);
    ctx.lineTo(NODES[b].x, NODES[b].y);
    ctx.stroke();
  });

  // Center links with animated brightness
  CENTER_LINKS.forEach((i) => {
    const node = NODES[i];
    // Each line pulses at a different phase
    const phase = i * (Math.PI * 2 / NODES.length);
    const brightness = 0.12 + 0.08 * Math.sin(t * Math.PI * 2 + phase);

    ctx.strokeStyle = rgba(node.color, brightness);
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(CENTER.x, CENTER.y);
    ctx.lineTo(node.x, node.y);
    ctx.stroke();
  });

  // === TRAVELING DOTS (one per center link, staggered) ===
  CENTER_LINKS.forEach((i) => {
    const node = NODES[i];
    const phase = i / NODES.length;
    const dotT = (t + phase) % 1;

    // Only show dot during first 60% of its cycle (gap between pulses)
    if (dotT < 0.6) {
      const progress = dotT / 0.6;
      const x = lerp(CENTER.x, node.x, progress);
      const y = lerp(CENTER.y, node.y, progress);
      const opacity = Math.sin(progress * Math.PI); // fade in/out

      // Dot
      ctx.fillStyle = rgba(node.color, opacity * 0.9);
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();

      // Bright center
      ctx.fillStyle = rgba(WHITE, opacity * 0.7);
      ctx.beginPath();
      ctx.arc(x, y, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  // === ORBIT RINGS (dashed, slowly rotating) ===
  ctx.save();
  ctx.translate(CENTER.x, CENTER.y);

  // Ring 1
  ctx.rotate(t * Math.PI * 0.3);
  ctx.strokeStyle = rgba(TEAL, 0.07);
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 10]);
  ctx.beginPath();
  ctx.arc(0, 0, 100, 0, Math.PI * 2);
  ctx.stroke();

  // Ring 2 (counter-rotate)
  ctx.rotate(-t * Math.PI * 0.6);
  ctx.strokeStyle = rgba(PURPLE, 0.05);
  ctx.lineWidth = 0.8;
  ctx.setLineDash([3, 14]);
  ctx.beginPath();
  ctx.arc(0, 0, 170, 0, Math.PI * 2);
  ctx.stroke();

  // Ring 3
  ctx.rotate(t * Math.PI * 0.2);
  ctx.strokeStyle = rgba(SKY, 0.04);
  ctx.lineWidth = 0.5;
  ctx.setLineDash([2, 18]);
  ctx.beginPath();
  ctx.arc(0, 0, 260, 0, Math.PI * 2);
  ctx.stroke();

  ctx.setLineDash([]);
  ctx.restore();

  // === OUTER NODES ===
  NODES.forEach((node, i) => {
    const { x, y, r, color, dim, icon } = node;
    const phase = i * (Math.PI * 2 / NODES.length);
    const pulse = 1 + 0.06 * Math.sin(t * Math.PI * 2 + phase);
    const pr = r * pulse;

    // Filled circle
    ctx.fillStyle = rgba(dim, 0.5);
    ctx.beginPath();
    ctx.arc(x, y, pr, 0, Math.PI * 2);
    ctx.fill();

    // Crisp stroke
    ctx.strokeStyle = rgba(color, 0.7);
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, pr, 0, Math.PI * 2);
    ctx.stroke();

    // Icon inside node
    const iconScale = r >= 26 ? 1 : 0.8;
    drawIcon(ctx, x, y, icon, color, iconScale);
  });

  // === CENTER NODE ===
  const centerPulse = 1 + 0.04 * Math.sin(t * Math.PI * 2);
  const cr = 44 * centerPulse;

  // Outer ring
  const ringR = cr + 8 + 3 * Math.sin(t * Math.PI * 2);
  ctx.strokeStyle = rgba(TEAL, 0.15 + 0.05 * Math.sin(t * Math.PI * 2));
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(CENTER.x, CENTER.y, ringR, 0, Math.PI * 2);
  ctx.stroke();

  // Main circle fill
  ctx.fillStyle = rgba(TEAL_DIM, 0.4);
  ctx.beginPath();
  ctx.arc(CENTER.x, CENTER.y, cr, 0, Math.PI * 2);
  ctx.fill();

  // Main circle stroke
  ctx.strokeStyle = rgba(TEAL, 0.8);
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(CENTER.x, CENTER.y, cr, 0, Math.PI * 2);
  ctx.stroke();

  // Chat bubble icon (crisp lines, no rounded corners that get aliased)
  const cx = CENTER.x, cy = CENTER.y - 2;
  ctx.strokeStyle = rgba(WHITE, 0.85);
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - 18, cy - 12);
  ctx.lineTo(cx + 18, cy - 12);
  ctx.lineTo(cx + 18, cy + 6);
  ctx.lineTo(cx - 4, cy + 6);
  ctx.lineTo(cx - 10, cy + 14);
  ctx.lineTo(cx - 10, cy + 6);
  ctx.lineTo(cx - 18, cy + 6);
  ctx.closePath();
  ctx.stroke();

  // Typing dots - sequential bounce
  for (let d = 0; d < 3; d++) {
    const dotPhase = t * Math.PI * 4 + d * (Math.PI * 2 / 3);
    const bounce = Math.max(0, Math.sin(dotPhase)) * 3;
    const opacity = 0.5 + 0.5 * Math.max(0, Math.sin(dotPhase));

    ctx.fillStyle = rgba(WHITE, opacity);
    ctx.beginPath();
    ctx.arc(cx - 8 + d * 8, cy - 3 - bounce, 2.5, 0, Math.PI * 2);
    ctx.fill();
  }

  // === SMALL ACCENT DOTS (subtle, scattered) ===
  const accents = [
    { x: 120, y: 80 }, { x: 1080, y: 80 }, { x: 1100, y: 540 },
    { x: 100, y: 540 }, { x: 550, y: 60 }, { x: 650, y: 570 },
    { x: 80, y: 400 }, { x: 1120, y: 400 },
  ];
  accents.forEach((p, i) => {
    const phase = i * 0.8;
    const opacity = 0.1 + 0.15 * Math.sin(t * Math.PI * 2 + phase);
    const colors = [TEAL, SKY, PURPLE];
    ctx.fillStyle = rgba(colors[i % 3], opacity);
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fill();
  });
}

async function createGif() {
  console.log(`Creating ${TOTAL_FRAMES} frames at ${WIDTH}x${HEIGHT}...`);

  const encoder = new GIFEncoder(WIDTH, HEIGHT, 'neuquant', true);
  encoder.setDelay(FRAME_DELAY);
  encoder.setRepeat(0);
  encoder.setQuality(10);
  encoder.start();

  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  for (let frame = 0; frame < TOTAL_FRAMES; frame++) {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    drawFrame(ctx, frame);
    encoder.addFrame(ctx);
    if (frame % 10 === 0) console.log(`Frame ${frame}/${TOTAL_FRAMES}`);
  }

  encoder.finish();

  const buffer = encoder.out.getData();
  const outputPath = path.join(__dirname, 'linkedin-chatbot-animated.gif');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Done! Size: ${(buffer.length / 1024 / 1024).toFixed(2)} MB`);
}

createGif().catch(console.error);
