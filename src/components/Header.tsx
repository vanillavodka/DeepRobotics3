import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Bot, Cog, Zap, Shield, Building2, Headphones, FileText, Download, HelpCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const productMenu = [
    { name: '人形机器人', href: '/products?category=humanoid', icon: Bot, desc: 'DR系列双足机器人' },
    { name: '四足机器人', href: '/products?category=quadruped', icon: Cog, desc: 'Lite/X系列全地形机器人' },
    { name: '轮腿机器人', href: '/products?category=wheel-leg', icon: Zap, desc: 'M系列混合运动平台' },
    { name: '核心组件', href: '/products?category=components', icon: Shield, desc: '关节模组与控制系统' },
  ];

  const applicationMenu = [
    { name: '电力巡检', href: '/applications/power-inspection', icon: Zap, desc: '智能电力设施巡检' },
    { name: '工业检测', href: '/applications/industrial-inspection', icon: Building2, desc: '工业场景智能检测' },
    { name: '应急救援', href: '/applications/emergency-rescue', icon: Shield, desc: '危险环境应急响应' },
    { name: '安防巡逻', href: '/applications/security-patrol', icon: Shield, desc: '智能安防解决方案' },
  ];

  const supportMenu = [
    { name: '技术文档', href: '/support#docs', icon: FileText, desc: '产品手册与API文档' },
    { name: '下载中心', href: '/support#downloads', icon: Download, desc: '固件、工具与资料' },
    { name: '帮助中心', href: '/support#help', icon: HelpCircle, desc: '常见问题与支持' },
    { name: '联系我们', href: '/support#contact', icon: Mail, desc: '技术支持与咨询' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold text-gradient group-hover:animate-glow-pulse">
              云深处
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  to="/"
                  className={cn(
                    'inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
                    isActive('/')
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  )}
                >
                  首页
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    isActive('/products') && 'text-primary bg-primary/10'
                  )}
                >
                  产品中心
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="mega-menu-grid">
                    {productMenu.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="mega-menu-item group"
                      >
                        <div className="mega-menu-icon">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    isActive('/applications') && 'text-primary bg-primary/10'
                  )}
                >
                  行业应用
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="mega-menu-grid">
                    {applicationMenu.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="mega-menu-item group"
                      >
                        <div className="mega-menu-icon">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    isActive('/support') && 'text-primary bg-primary/10'
                  )}
                >
                  服务支持
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="mega-menu-grid">
                    {supportMenu.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="mega-menu-item group"
                      >
                        <div className="mega-menu-icon">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/interactive-product"
                  className={cn(
                    'inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
                    isActive('/interactive-product')
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  )}
                >
                  产品说明
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/interactive-product-2"
                  className={cn(
                    'inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
                    isActive('/interactive-product-2')
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  )}
                >
                  产品说明2
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/news"
                  className={cn(
                    'inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
                    isActive('/news')
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  )}
                >
                  新闻资讯
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/about"
                  className={cn(
                    'inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
                    isActive('/about')
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  )}
              >
                关于我们
              </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/contact"
                  className={cn(
                    'inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
                    isActive('/contact')
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  )}
                >
                  联系我们
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/contact">
              <Button variant="hero" size="sm" className="hidden md:inline-flex">
                联系我们
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in border-t border-border">
            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300',
                  isActive('/') ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                )}
              >
                首页
              </Link>

              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                产品中心
              </div>
              {productMenu.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-2 text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}

              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-2">
                行业应用
              </div>
              {applicationMenu.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-2 text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}

              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-2">
                服务支持
              </div>
              {supportMenu.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-2 text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}

              <Link
                to="/interactive-product"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 mt-2',
                  isActive('/interactive-product') ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                )}
              >
                产品说明
              </Link>

              <Link
                to="/interactive-product-2"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300',
                  isActive('/interactive-product-2') ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                )}
              >
                产品说明2
              </Link>

              <Link
                to="/news"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300',
                  isActive('/news') ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                )}
              >
                新闻资讯
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300',
                  isActive('/about') ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                )}
              >
                关于我们
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300',
                  isActive('/contact') ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                )}
              >
                联系我们
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
