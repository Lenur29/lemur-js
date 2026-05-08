type LegendItem = {
  label: string;
  count: number;
  color: 'success' | 'danger' | 'muted';
};

export type SegmentLegendProps = {
  items: LegendItem[];
};

const colorClasses: Record<LegendItem['color'], string> = {
  success: 'bg-success',
  danger: 'bg-danger',
  muted: 'bg-border',
};

const SegmentLegend = ({ items }: SegmentLegendProps) => (
  <div className="mt-2.5 flex flex-wrap gap-3.5 text-xs text-text-muted">
    {items.map((item) => (
      <span key={item.label} className="inline-flex items-center gap-1.5">
        <span
          className={`inline-block h-2 w-2 rounded-full ${colorClasses[item.color]}`}
        />
        {item.count} {item.label}
      </span>
    ))}
  </div>
);

export default SegmentLegend;
