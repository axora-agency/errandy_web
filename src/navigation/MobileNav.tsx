import { Link } from 'react-router-dom';
import type { Audience, MenuItem } from './types';
import { getBadge, isVisible } from './utils';

interface MobileNavProps {
  audience: Audience;
  items: MenuItem[];
}

export const MobileNav = ({ audience, items }: MobileNavProps) => {
  const hasFlag = (_: string) => true;
  const renderItems = (nodes: MenuItem[]) => (
    <ul className="px-3 py-2">
      {nodes.filter(n => isVisible(n, audience, hasFlag)).map(n => {
        if (n.type === 'divider') return <li key={n.id} className="my-2 h-px bg-muted" />;
        if (n.type === 'section') return <li key={n.id} className="text-xs text-muted-foreground py-2">{n.label}</li>;
        if (n.type === 'custom') return <li key={n.id} className="py-2">{n.render()}</li>;
        if (n.type === 'action') return (
          <li key={n.id}>
            <button className="w-full text-left py-2" onClick={n.onClick} disabled={n.disabled}>{n.label}</button>
          </li>
        );
        if (n.type === 'dropdown') {
          return (
            <li key={n.id} className="py-1">
              <details>
                <summary className="cursor-pointer py-2">{n.label}</summary>
                <div className="pl-3 border-l">{renderItems(n.children)}</div>
              </details>
            </li>
          );
        }
        const badge = getBadge(n);
        const isExternal = n.external || /^https?:/.test(n.to);
        const content = (
          <span className="inline-flex items-center gap-2 py-2">
            {n.icon ? <n.icon className="size-4" /> : null}
            <span>{n.label}</span>
            {badge ? <span className="ml-auto rounded-sm bg-primary/10 text-primary text-xs px-1.5 py-0.5">{badge}</span> : null}
          </span>
        );
        return (
          <li key={n.id}>
            {isExternal ? (
              <a href={n.to} target={n.target ?? '_self'}>{content}</a>
            ) : (
              <Link to={n.to}>{content}</Link>
            )}
          </li>
        );
      })}
    </ul>
  );
  return <nav className="lg:hidden">{renderItems(items)}</nav>;
};
