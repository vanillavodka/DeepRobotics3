import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const productLinks = [
    { name: '人形机器人', href: '/products/humanoid' },
    { name: '四足机器人', href: '/products/quadruped' },
    { name: '轮腿机器人', href: '/products/wheel-leg' },
    { name: '核心部件', href: '/products/components' },
  ];

  const applicationLinks = [
    { name: '电力巡检', href: '/applications/power' },
    { name: '工业巡检', href: '/applications/industrial' },
    { name: '应急救援', href: '/applications/rescue' },
    { name: '安防巡逻', href: '/applications/security' },
  ];

  const supportLinks = [
    { name: '技术中心', href: '/support/tech' },
    { name: '文档中心', href: '/support/docs' },
    { name: '下载中心', href: '/support/downloads' },
    { name: '帮助中心', href: '/support/help' },
  ];

  const companyLinks = [
    { name: '关于我们', href: '/about' },
    { name: '新闻资讯', href: '/news' },
    { name: '加入我们', href: '/careers' },
    { name: '联系我们', href: '/contact' },
  ];

  const legalLinks = [
    { name: '隐私政策', href: '/privacy' },
    { name: '使用条款', href: '/terms' },
    { name: '法律声明', href: '/legal' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-gradient mb-4">云深处</div>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              引领智能机器人技术创新，为各行业提供领先的机器人解决方案，推动产业智能化升级。
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span>400-888-8888</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span>contact@yunshen-robotics.com</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>中国·深圳</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">产品中心</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">行业应用</h3>
            <ul className="space-y-2">
              {applicationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">服务支持</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">公司信息</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} 云深处机器人科技有限公司. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
