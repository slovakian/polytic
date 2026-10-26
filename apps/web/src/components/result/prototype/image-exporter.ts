import type { WorldviewResult } from "./types";

export function exportResultAsImage(result: WorldviewResult): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const scale = 2; // High-DPI 2x Retina
      const width = 1080;
      const height = 1440; // 3:4 portrait social aspect ratio

      const canvas = document.createElement("canvas");
      canvas.width = width * scale;
      canvas.height = height * scale;

      const ctx = canvas.getContext("2d");

      if (!ctx) {
        throw new Error("Canvas 2D context unavailable");
      }

      ctx.scale(scale, scale);

      // Background - Dark editorial ink canvas
      const bgGradient = ctx.createLinearGradient(0, 0, width, height);
      bgGradient.addColorStop(0, "#0c0d12");
      bgGradient.addColorStop(0.5, "#12141c");
      bgGradient.addColorStop(1, "#0a0a0f");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Subtle paper/canvas border
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.strokeRect(32, 32, width - 64, height - 64);

      // Top Masthead / Header
      ctx.fillStyle = "#f59e0b"; // Warm Amber
      ctx.font = "bold 13px ui-monospace, Menlo, monospace";
      ctx.letterSpacing = "2px";
      ctx.fillText("POLYTIC PARTY · POLITICAL MAP VERIFICATION", 60, 80);

      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      ctx.font = "12px ui-monospace, Menlo, monospace";
      ctx.fillText(`${result.turnCount} TURNS · FIRST-PASS CHECKPOINT`, width - 360, 80);

      // Divider line
      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx.beginPath();
      ctx.moveTo(60, 100);
      ctx.lineTo(width - 60, 100);
      ctx.stroke();

      // Hero Headline
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 34px Georgia, Cambria, serif";
      ctx.fillText(result.headline, 60, 160);

      // Main Label Badge
      const mainLabel = result.labels.find((l) => l.type === "Main") ?? result.labels[0];

      if (mainLabel) {
        ctx.fillStyle = "rgba(245, 158, 11, 0.15)";
        ctx.strokeStyle = "rgba(245, 158, 11, 0.4)";
        ctx.lineWidth = 1;
        roundRect(ctx, 60, 185, 340, 38, 8, true, true);

        ctx.fillStyle = "#fbbf24";
        ctx.font = "bold 15px Georgia, serif";
        ctx.fillText(`★ Primary Label: ${mainLabel.name}`, 76, 210);
      }

      // Narrative text
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.font = "16px Georgia, serif";
      wrapText(ctx, result.narrative, 60, 260, width - 120, 26);

      // Section: Closest Thinkers
      let curY = 370;
      ctx.fillStyle = "#f59e0b";
      ctx.font = "bold 13px ui-monospace, Menlo, monospace";
      ctx.fillText("CLOSEST REFERENCE THINKERS", 60, curY);

      curY += 20;
      const topThinkers = result.thinkers.slice(0, 2);

      topThinkers.forEach((t, i) => {
        const cardX = 60 + i * ((width - 150) / 2 + 30);
        const cardW = (width - 150) / 2;

        ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        roundRect(ctx, cardX, curY, cardW, 140, 10, true, true);

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 18px Georgia, serif";
        ctx.fillText(t.name, cardX + 16, curY + 32);

        ctx.fillStyle = "#10b981"; // Emerald
        ctx.font = "bold 13px ui-monospace, Menlo, monospace";
        ctx.fillText(`${t.alignment}% MATCH`, cardX + cardW - 110, curY + 32);

        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.font = "12px sans-serif";
        ctx.fillText(t.lineage, cardX + 16, curY + 54);

        ctx.fillStyle = "#f59e0b";
        ctx.font = "bold 11px ui-monospace, Menlo, monospace";
        ctx.fillText(`DIVERGENCE: ${t.divergence.dimension}`, cardX + 16, curY + 84);

        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.font = "12px Georgia, serif";
        wrapText(ctx, t.divergence.description, cardX + 16, curY + 104, cardW - 32, 16, 2);
      });

      curY += 175;

      // Section: Key Tensions
      ctx.fillStyle = "#f59e0b";
      ctx.font = "bold 13px ui-monospace, Menlo, monospace";
      ctx.fillText("SURFACED TENSIONS & FAULT LINES", 60, curY);

      curY += 20;
      const keyTension = result.tensions[0];

      if (keyTension) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
        ctx.strokeStyle =
          keyTension.status === "Reconciled"
            ? "rgba(16, 185, 129, 0.3)"
            : "rgba(245, 158, 11, 0.3)";
        roundRect(ctx, 60, curY, width - 120, 110, 10, true, true);

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 16px Georgia, serif";
        ctx.fillText(keyTension.title, 80, curY + 32);

        ctx.fillStyle = keyTension.status === "Reconciled" ? "#10b981" : "#f59e0b";
        ctx.font = "bold 11px ui-monospace, Menlo, monospace";
        ctx.fillText(
          `[ ${keyTension.status.toUpperCase()} ]`,
          width - 220,
          curY + 32,
        );

        ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
        ctx.font = "13px Georgia, serif";
        const tensionDesc = keyTension.bridge ?? keyTension.aiStressTest;
        wrapText(ctx, tensionDesc, 80, curY + 60, width - 160, 20, 2);
      }

      curY += 140;

      // Section: Key Dimensions Breakdown
      ctx.fillStyle = "#f59e0b";
      ctx.font = "bold 13px ui-monospace, Menlo, monospace";
      ctx.fillText("CORE DIMENSIONS (ORDERED BY PULL)", 60, curY);

      curY += 24;
      const topDimensions = result.dimensions.slice(0, 4);

      topDimensions.forEach((dim) => {
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 14px Georgia, serif";
        ctx.fillText(dim.name, 60, curY + 16);

        ctx.fillStyle =
          dim.status === "Settled"
            ? "#10b981"
            : dim.status === "Torn"
              ? "#f59e0b"
              : "rgba(255, 255, 255, 0.5)";
        ctx.font = "11px ui-monospace, Menlo, monospace";
        ctx.fillText(dim.status.toUpperCase(), width - 130, curY + 16);

        // Spectrum bar
        curY += 26;
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        roundRect(ctx, 60, curY, width - 120, 10, 5, true, false);

        // Position indicator dot
        const normalizedLeft = ((dim.position + 100) / 200) * (width - 120);
        ctx.fillStyle = "#38bdf8"; // Cyan dot
        ctx.beginPath();
        ctx.arc(60 + normalizedLeft, curY + 5, 8, 0, Math.PI * 2);
        ctx.fill();

        // Pole labels
        curY += 20;
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.font = "11px sans-serif";
        ctx.fillText(dim.poleA, 60, curY);
        const bWidth = ctx.measureText(dim.poleB).width;
        ctx.fillText(dim.poleB, width - 60 - bWidth, curY);

        curY += 22;
      });

      // Bottom Footer Bar
      const footerY = height - 70;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx.beginPath();
      ctx.moveTo(60, footerY);
      ctx.lineTo(width - 60, footerY);
      ctx.stroke();

      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      ctx.font = "12px ui-monospace, Menlo, monospace";
      ctx.fillText("POLYTIC.PARTY · ANONYMOUS FIRST VISIT · NO DATA STORED", 60, footerY + 30);

      ctx.fillStyle = "#f59e0b";
      ctx.font = "bold 12px ui-monospace, Menlo, monospace";
      ctx.fillText("HIGH-RESOLUTION POLITICAL MAP", width - 320, footerY + 30);

      // Trigger download
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("Image blob creation failed"));

          return;
        }

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `polytic-result-${result.personaKey}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        resolve();
      }, "image/png");
    } catch (err) {
      reject(err);
    }
  });
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
  fill: boolean,
  stroke: boolean,
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();

  if (fill) {
    ctx.fill();
  }

  if (stroke) {
    ctx.stroke();
  }
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  maxLines?: number,
) {
  const words = text.split(" ");
  let line = "";
  let lineCount = 0;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > maxWidth && n > 0) {
      lineCount++;

      if (maxLines && lineCount >= maxLines) {
        ctx.fillText(line.trim() + "…", x, y);

        return;
      }

      ctx.fillText(line.trim(), x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }

  ctx.fillText(line.trim(), x, y);
}
