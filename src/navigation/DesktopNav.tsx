import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import type { Audience, MenuItem } from './types';
import { getBadge, isVisible } from './utils';
import { isActivePath } from './utils';
import { ChevronDown } from 'lucide-react';

interface DesktopNavProps {
  audience: Audience;
  items: MenuItem[];
}

export const DesktopNav = ({ audience, items }: DesktopNavProps) => {
  const hasFlag = (_: string) => true; // TODO: integrate with feature flags
  const { pathname } = useLocation();
  return (
    <nav className="hidden lg:flex items-center gap-2">
      {items.filter(i => isVisible(i, audience, hasFlag)).map(item => {
        if (item.type === 'divider' || item.type === 'section') return null;
        if (item.type === 'custom') return <div key={item.id}>{item.render()}</div>;
        if (item.type === 'action') {
          return (
            <button key={item.id} disabled={item.disabled} onClick={item.onClick} className="px-2 py-1.5 rounded-md text-sm">
              {item.icon ? <item.icon className="size-3" /> : null}
              <span className="ml-1.5">{item.label}</span>
            </button>
          );
        }
        if (item.type === 'dropdown') {
          return (
            <DropdownMenu key={item.id}>
              <DropdownMenuTrigger className="dropdown-trigger inline-flex items-center gap-1.5 px-2 py-1.5 rounded-md text-sm">
                {item.icon ? <item.icon className="size-3" /> : null}
                <span>{item.label}</span>
                <ChevronDown className="chevron size-3 transition-transform" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-full min-w-[250px] p-0 py-2'>
                {item.children.map(child => {
                  if (child.type === 'divider') return <DropdownMenuSeparator key={child.id} />;
                  if (child.type === 'section') return <DropdownMenuLabel key={child.id}>{child.label}</DropdownMenuLabel>;
                  if (child.type === 'custom') return <div key={child.id} className="px-2 py-1.5">{child.render()}</div>;
                  if (child.type === 'action') return (
                    <DropdownMenuItem key={child.id} onClick={child.onClick}>
                      {child.icon ? <child.icon className="size-4" /> : null}
                      <span className="ml-2">{child.label}</span>
                    </DropdownMenuItem>
                  );
                  // link
                  if (child.type !== 'link') return null;
                  const active = isActivePath(pathname, child.to, child.activeMatch);
                  const badge = getBadge(child);
                  const isExternal = child.external || /^https?:/.test(child.to);
                  const content = (
                    <span className={cn('inline-flex items-center gap-2', active && 'text-primary') }>
                      {child.icon ? <child.icon className="size-4" /> : null}
                      <span>{child.label}</span>
                      {badge ? <span className="ml-auto rounded-sm bg-primary/10 text-primary text-xs px-1.5 py-0.5">{badge}</span> : null}
                    </span>
                  );
                  return (
                    <DropdownMenuItem key={child.id} asChild className='w-full hover:bg-muted rounded-none'>
                      {isExternal ? (
                        <a href={child.to} target={child.target ?? '_self'} rel={child.target === '_blank' ? 'noreferrer' : undefined}>
                          {content}
                        </a>
                      ) : (
                        <Link to={child.to}>{content}</Link>
                      )}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          );
        }
        // link
  const active = isActivePath(pathname, item.to, item.activeMatch);
        const badge = getBadge(item);
        const isExternal = item.external || /^https?:/.test(item.to);
        const content = (
          <span className={cn('inline-flex items-center gap-1.5', active && 'text-primary') }>
            {item.icon ? <item.icon className="size-3" /> : null}
            <span>{item.label}</span>
            {badge ? <span className="ml-auto rounded-sm bg-primary/10 text-primary text-xs px-1.5 py-0.5">{badge}</span> : null}
          </span>
        );
        return isExternal ? (
          <a key={item.id} href={item.to} target={item.target ?? '_self'} className="px-2 py-1.5 rounded-md text-sm">
            {content}
          </a>
        ) : (
          <Link key={item.id} to={item.to} className={cn('px-2 py-1.5 rounded-md text-sm', active && 'text-primary') }>
            {content}
          </Link>
        );
      })}
    </nav>
  );
};
