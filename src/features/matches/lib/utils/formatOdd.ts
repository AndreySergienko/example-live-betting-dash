export function formatOdd(value: number, precision = 2): string {
    return Number.isFinite(value) ? value.toFixed(precision) : "—"
}

export function formatDelta(value: number, precision = 2): string {
    if (!Number.isFinite(value) || value === 0) return "—"
    const sign = value > 0 ? "+" : ""
    return `${sign}${value.toFixed(precision)}`
}