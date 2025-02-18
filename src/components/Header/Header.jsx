import React from 'react';
import { Logo, Container, LogoutBtn } from '../index';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = React.useState(false);
    const [isDark, setIsDark] = React.useState(
        localStorage.getItem('theme') === 'dark'
    );

    const navItems = React.useMemo(() => [
      {
        name: 'Home',
        slug: "/",
        active: true
      }, 
      {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
      },
      {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
      },
      {
        name: "Login",
        slug: "/login",
        active: !authStatus,
      },
      {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
      },
    ], [authStatus]);

    const toggleTheme = () => {
      const newTheme = !isDark;
      setIsDark(newTheme);
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark');
    };

    return (
      <header className='w-full py-3 bg-gray-500 shadow-lg'>
        <Container>
          <nav className='flex items-center justify-between w-full'>
            <div className="flex items-center gap-2">
              <Logo />
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-400 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-4">
              {navItems.map((item) => 
                item.active ? (
                  <li key={item.name}>
                    <Link
                      to={item.slug}
                      className={`inline-block px-4 py-2 rounded-lg transition-colors ${
                        pathname === item.slug 
                          ? 'bg-white text-gray-900' 
                          : 'text-white hover:bg-gray-400'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>

            {/* Mobile Navigation */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-400"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden"
              >
                <ul className="pt-4 pb-3 space-y-2">
                  {navItems.map((item) => 
                    item.active ? (
                      <li key={item.name}>
                        <Link
                          to={item.slug}
                          onClick={() => setIsOpen(false)}
                          className={`block px-4 py-2 rounded-lg ${
                            pathname === item.slug 
                              ? 'bg-white text-gray-900' 
                              : 'text-white hover:bg-gray-400'
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ) : null
                  )}
                  {authStatus && (
                    <li className="px-4">
                      <LogoutBtn />
                    </li>
                  )}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </header>
    );
}

export default Header;