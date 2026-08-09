/** Pure helpers extracted from the Parker Fund marketing page behavior. */

export const COUNTDOWN_FINAL_DATE = "May 15, 2024 23:59:00";

export function pad2(value) {
  const n = Number(value);
  return n <= 9 ? `0${n}` : String(n);
}

/**
 * Remaining time parts until finalDateMs, or expired=true when past.
 */
export function remainingParts(finalDateMs, nowMs = Date.now()) {
  const diff = finalDateMs - nowMs;
  if (diff <= 0) {
    return { expired: true, days: 0, hours: "00", minutes: "00", seconds: "00" };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return {
    expired: false,
    days,
    hours: pad2(hours),
    minutes: pad2(minutes),
    seconds: pad2(seconds),
  };
}

export function overlayOpacity(currentScroll, checkpoint) {
  if (checkpoint <= 0) return 0;
  if (currentScroll <= checkpoint) {
    return 1 - currentScroll / checkpoint;
  }
  return 0;
}

export function goTopShouldShow(scrollY, pxShow = 800) {
  return scrollY >= pxShow;
}

export function detailsBottomPx(viewportHeight, detailsHeight) {
  return viewportHeight - detailsHeight;
}

export function nextTabIndex(index, length) {
  if (length <= 0) return 0;
  return index >= length - 1 ? 0 : index + 1;
}

export function prevTabIndex(index, length) {
  if (length <= 0) return 0;
  return index <= 0 ? length - 1 : index - 1;
}
