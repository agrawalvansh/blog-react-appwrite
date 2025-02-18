import React, { useMemo } from 'react';
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

    const navItems = useMemo(() => [
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
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="py-3 shadow-sm bg-white dark:bg-gray-900 sticky top-0 z-50"
      >
        <Container>
            <nav className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Logo />
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
                                    className={`inline-block px-4 py-2 duration-200 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-full ${
                                        pathname === item.slug 
                                            ? 'text-blue-600 dark:text-blue-400 font-medium' 
                                            : 'text-gray-700 dark:text-gray-300'
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
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                                                    ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-medium' 
                                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
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
      </motion.header>
    );
}

export default Header;