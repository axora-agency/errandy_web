import { useState } from 'react';
import { User, Briefcase, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import type { UserRole } from '@/gql/graphql';

export default function Roles() {
  const [selected, setSelected] = useState<UserRole | null>(null);

  const handleSelect = (role: UserRole) => {
    setSelected(role);
  };

  const baseClasses =
    'relative rounded-2xl border bg-white/50 backdrop-blur p-6 shadow-md overflow-hidden cursor-pointer transition-all';
  const selectedClasses = 'ring-2 ring-offset-2 ring-blue-500 scale-[1.02]';

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Client Card */}
      <motion.article
        layout
        whileHover={{ scale: 1.02 }}
        onClick={() => handleSelect('CLIENT')}
        className={`${baseClasses} ${selected === 'CLIENT' ? selectedClasses : ''}`}
        aria-label="Client account card"
      >
        {/* Decorative 3D-ish SVG */}
        <div className="absolute -right-8 -top-8 opacity-80 pointer-events-none">
          <svg
            width="160"
            height="160"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gClient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.9" />
              </linearGradient>
              <filter id="fClient" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="8" stdDeviation="18" floodOpacity="0.15" />
              </filter>
            </defs>

            <g filter="url(#fClient)">
              <ellipse
                cx="80"
                cy="80"
                rx="64"
                ry="36"
                fill="url(#gClient)"
                transform="rotate(-20 80 80)"
              />
              <ellipse
                cx="95"
                cy="60"
                rx="34"
                ry="20"
                fill="#ffffff22"
                transform="rotate(-10 95 60)"
              />
            </g>
          </svg>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-sky-400 to-violet-600 flex items-center justify-center shadow-lg">
            <User className="w-7 h-7 text-white drop-shadow-sm" />
          </div>

          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              I want to hire (Client)
              {selected === 'CLIENT' && <CheckCircle2 className="w-5 h-5 text-blue-500" />}
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Post jobs, manage applicants and hire the best workers for your projects. Ideal if you want to find
              service providers quickly and securely.
            </p>
          </div>
        </div>
      </motion.article>

      {/* Worker Card */}
      <motion.article
        layout
        whileHover={{ scale: 1.02 }}
        onClick={() => handleSelect('WORKER')}
        className={`${baseClasses} ${selected === 'WORKER' ? selectedClasses : ''}`}
        aria-label="Worker account card"
      >
        <div className="absolute -left-8 -bottom-8 opacity-90 pointer-events-none">
          <svg
            width="120"
            height="120"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gWorker" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.5" />
                <stop offset="80%" stopColor="#059669" stopOpacity="0.5" />
              </linearGradient>
              <filter id="fWorker" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="8" stdDeviation="18" floodOpacity="0.12" />
              </filter>
            </defs>

            <g filter="url(#fWorker)">
              <rect
                x="30"
                y="40"
                width="100"
                height="70"
                rx="30"
                fill="url(#gWorker)"
                transform="rotate(14 80 75)"
              />
              <circle cx="90" cy="50" r="20" fill="#ffffff22" />
            </g>
          </svg>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center shadow-lg">
            <Briefcase className="w-7 h-7 text-white drop-shadow-sm" />
          </div>

          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              I want to work (Worker)
              {selected === 'WORKER' && <CheckCircle2 className="w-5 h-5 text-green-600" />}
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Create your worker profile, showcase your skills and apply to jobs. Best if you want to offer services and
              build a client base.
            </p>
          </div>
        </div>
      </motion.article>
    </div>
  );
}