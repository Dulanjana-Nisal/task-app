import { useState } from 'react';
import './homePage.css';

/* ------------------------------------------------------------------
   Data
------------------------------------------------------------------ */

const TASKS = [
  { id: 1, title: 'Design onboarding flow', tag: 'Design', tone: 'blue', due: 'Completed', done: true },
  { id: 2, title: 'Review pull requests', tag: 'Dev', tone: 'slate', due: 'Completed', done: true },
  { id: 3, title: 'Prepare sprint demo', tag: 'Team', tone: 'sky', due: 'Today, 4:00 PM', done: false },
  { id: 4, title: 'Write release notes', tag: 'Docs', tone: 'amber', due: 'Tomorrow', done: false },
];

const AVATARS = ['AK', 'SM', 'RT'];

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#boards', label: 'Boards' },
  { href: '#teams', label: 'Teams' },
];

const FOOTER_LINKS = [
  { href: '#privacy', label: 'Privacy' },
  { href: '#terms', label: 'Terms' },
  { href: '#contact', label: 'Contact' },
];

const RING_RADIUS = 34;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

/* ------------------------------------------------------------------
   Icons (inline SVG, stroke only)
------------------------------------------------------------------ */

function Icon({ size = 20, stroke = 'currentColor', strokeWidth = 2, className, children }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const CubeIcon = (props) => (
  <Icon {...props}>
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
    <path d="M4 7.5l8 4.5 8-4.5" />
    <path d="M12 12v9" />
  </Icon>
);

const CheckIcon = (props) => (
  <Icon {...props}>
    <path d="M20 6L9 17l-5-5" />
  </Icon>
);

const ArrowIcon = (props) => (
  <Icon {...props}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </Icon>
);

const SearchIcon = (props) => (
  <Icon {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.5-3.5" />
  </Icon>
);

const BellIcon = (props) => (
  <Icon {...props}>
    <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.7 21a2 2 0 01-3.4 0" />
  </Icon>
);

const BoardsIcon = (props) => (
  <Icon {...props}>
    <rect x="3" y="4" width="5" height="16" rx="1.5" />
    <rect x="10" y="4" width="5" height="10" rx="1.5" />
    <rect x="17" y="4" width="4" height="13" rx="1.5" />
  </Icon>
);

const CalendarIcon = (props) => (
  <Icon {...props}>
    <rect x="3" y="5" width="18" height="16" rx="3" />
    <path d="M8 3v4" />
    <path d="M16 3v4" />
    <path d="M3 10h18" />
    <path d="M9 15l2 2 4-4" />
  </Icon>
);

const TeamIcon = (props) => (
  <Icon {...props}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6" />
    <circle cx="17.5" cy="9" r="2.5" />
    <path d="M17 14.2c2.6.2 4.5 2.2 4.5 4.8" />
  </Icon>
);

const FEATURES = [
  {
    id: 'boards',
    icon: BoardsIcon,
    title: 'Boards that move',
    text: 'Drag tasks across lists and see the whole project at a glance.',
  },
  {
    id: 'how',
    icon: CalendarIcon,
    title: 'A calm Today view',
    text: 'Pick what matters, set a time, and let everything else wait.',
  },
  {
    id: 'teams',
    icon: TeamIcon,
    title: 'Teams in sync',
    text: 'Assign, comment and nudge without leaving the task.',
  },
];

/* ------------------------------------------------------------------
   Page
------------------------------------------------------------------ */

/**
 * @param {string}  [accent]  Main blue, any CSS colour. Falls back to the value in homePage.css.
 * @param {number}  [tilt=16] Resting tilt of the 3D scene, in degrees (0-30 looks best).
 */
export default function HomePage({ accent, tilt = 16 }) {
  // Pointer position over the 3D scene, normalized to -1..1 on each axis.
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  const handleLeave = () => setPointer({ x: 0, y: 0 });

  const doneCount = TASKS.filter((task) => task.done).length;
  const pct = Math.round((doneCount / TASKS.length) * 100);

  const sceneTransform =
    `rotateX(${(tilt * 0.5 - pointer.y * 7).toFixed(1)}deg) ` +
    `rotateY(${(-tilt + pointer.x * 10).toFixed(1)}deg) ` +
    `rotateZ(${(tilt * 0.1).toFixed(1)}deg)`;

  // Only override the CSS variable when an accent prop is passed.
  const rootStyle = accent ? { '--hp-accent': accent } : undefined;

  return (
    <div className="hp" style={rootStyle}>
      <div className="hp-bg-circle hp-drift" />

      <div className="hp-container">
        {/* Navigation */}
        <header className="hp-nav hp-rise">
          <a className="hp-logo" href="#top">
            <span className="hp-logo-tile">
              <CubeIcon size={22} stroke="#FFFFFF" />
            </span>
            <span className="hp-logo-text">TaskFlow</span>
          </a>

          <nav className="hp-nav-links" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <a key={link.href} className="hp-nav-link" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hp-nav-actions">
            <a className="hp-btn hp-btn--ghost" href="/login">
              Log in
            </a>
            <a className="hp-btn hp-btn--nav" href="/register">
              Get started
            </a>
          </div>
        </header>

        {/* Hero */}
        <section id="top" className="hp-hero">
          <div className="hp-hero-copy">
            <div className="hp-badge hp-rise" style={{ animationDelay: '.1s' }}>
              <CheckIcon size={18} />
              Tasks, boards and calendar in one place
            </div>

            <h1 className="hp-title hp-rise" style={{ animationDelay: '.2s' }}>
              Plan the day.
              <br />
              <span className="hp-title-accent">Ship the week.</span>
            </h1>

            <p className="hp-lead hp-rise" style={{ animationDelay: '.3s' }}>
              TaskFlow keeps your to-dos, projects and deadlines in one calm workspace, so you always know what to do
              next.
            </p>

            <div className="hp-hero-actions hp-rise" style={{ animationDelay: '.4s' }}>
              <a className="hp-btn hp-btn--primary" href="#start">
                Create your first board
                <ArrowIcon size={18} />
              </a>
              <a className="hp-btn hp-btn--secondary" href="#how">
                See how it works
              </a>
            </div>
          </div>

          {/* 3D scene */}
          <div className="hp-scene-col">
            <div className="hp-scene" onMouseMove={handleMove} onMouseLeave={handleLeave}>
              <div className="hp-scene-inner hp-scene-in" style={{ transform: sceneTransform }}>
                <div className="hp-plate" />

                {/* Main window */}
                <div className="hp-window">
                  <div className="hp-window-head">
                    <div className="hp-window-title">
                      <span className="hp-window-day">Today</span>
                      <span className="hp-window-date">Tue, 24 Nov</span>
                    </div>
                    <div className="hp-icon-chip">
                      <SearchIcon size={20} />
                    </div>
                  </div>

                  <div className="hp-progress">
                    <div className="hp-progress-label">
                      <span>
                        {doneCount} of {TASKS.length} tasks done
                      </span>
                      <span className="hp-progress-pct">{pct}%</span>
                    </div>
                    <div className="hp-progress-track">
                      <div className="hp-progress-fill" style={{ width: `${pct}%` }} />
                    </div>
                  </div>

                  <div className="hp-tasks">
                    {TASKS.map((task, index) => (
                      <div key={task.id} className="hp-task" style={{ animationDelay: `${(0.9 + index * 0.14).toFixed(2)}s` }}>
                        {task.done ? (
                          <div
                            className="hp-check hp-check--done"
                            style={{ animationDelay: `${(1.25 + index * 0.14).toFixed(2)}s` }}
                          >
                            <CheckIcon size={14} stroke="#FFFFFF" strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="hp-check hp-check--open" />
                        )}

                        <div className="hp-task-body">
                          <span className={`hp-task-title${task.done ? ' is-done' : ''}`}>{task.title}</span>
                          <span className="hp-task-due">{task.due}</span>
                        </div>

                        <span className={`hp-tag hp-tag--${task.tone}`}>{task.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating: progress ring */}
                <div className="hp-float-card hp-ring-card hp-float-a">
                  <div className="hp-ring-wrap">
                    <svg width="88" height="88" viewBox="0 0 88 88" aria-hidden="true">
                      <circle className="hp-ring-track" cx="44" cy="44" r={RING_RADIUS} />
                      <g transform="rotate(-90 44 44)">
                        <circle
                          className="hp-ring"
                          cx="44"
                          cy="44"
                          r={RING_RADIUS}
                          style={{
                            strokeDasharray: `${RING_CIRCUMFERENCE} ${RING_CIRCUMFERENCE}`,
                            strokeDashoffset: RING_CIRCUMFERENCE * (1 - pct / 100),
                          }}
                        />
                      </g>
                    </svg>
                    <div className="hp-ring-value">{pct}%</div>
                  </div>
                  <span className="hp-ring-label">Daily goal</span>
                </div>

                {/* Floating: reminder */}
                <div className="hp-float-card hp-reminder hp-float-b">
                  <div className="hp-reminder-icon">
                    <BellIcon className="hp-bell" size={20} stroke="#FFFFFF" />
                    <span className="hp-ping" />
                    <span className="hp-dot" />
                  </div>
                  <div className="hp-reminder-text">
                    <span className="hp-reminder-label">Reminder</span>
                    <span className="hp-reminder-title">Sprint demo at 4:00 PM</span>
                  </div>
                </div>

                {/* Floating: team */}
                <div className="hp-float-card hp-team hp-float-a">
                  <div className="hp-avatars">
                    {AVATARS.map((initials, index) => (
                      <span key={initials} className={`hp-avatar hp-avatar--${index + 1}`}>
                        {initials}
                      </span>
                    ))}
                  </div>
                  <span className="hp-team-label">Team</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="hp-features">
          <div className="hp-section-head">
            <span className="hp-eyebrow">Features</span>
            <h2 className="hp-h2">Built to keep work moving</h2>
          </div>

          <div className="hp-feature-grid">
            {FEATURES.map(({ id, icon: FeatureIcon, title, text }) => (
              <article key={id} id={id} className="hp-feature hp-reveal">
                <div className="hp-feature-tile">
                  <FeatureIcon size={28} stroke="#FFFFFF" />
                </div>
                <h3 className="hp-feature-title">{title}</h3>
                <p className="hp-feature-text">{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <section id="start" className="hp-cta hp-reveal">
          <div className="hp-cta-copy">
            <h2 className="hp-h2">Start your first board today.</h2>
            <p className="hp-cta-text">Bring your tasks together and see your week take shape.</p>
            <a className="hp-btn hp-btn--white" href="#login">
              Get started
              <ArrowIcon size={18} />
            </a>
          </div>

          <div className="hp-cta-art" aria-hidden="true">
            <div className="hp-cta-art-inner">
              <div className="hp-layer hp-layer--back hp-float-b" />
              <div className="hp-layer hp-layer--mid hp-float-a" />
              <div className="hp-layer hp-layer--front hp-float-b">
                <div className="hp-layer-tile">
                  <CheckIcon size={28} stroke="#FFFFFF" strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="login" className="hp-footer">
          <span>© 2026 TaskFlow</span>
          <div className="hp-footer-links">
            {FOOTER_LINKS.map((link) => (
              <a key={link.href} className="hp-footer-link" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}