import { Link } from 'react-router-dom';
import { FileText, HelpCircle, Download, Book } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Support = () => {
  const supportCategories = [
    {
      icon: Book,
      title: '技术中心',
      description: '深入了解我们的技术原理和最佳实践',
      link: '/support/tech',
      items: ['技术白皮书', '研发博客', '技术视频'],
    },
    {
      icon: FileText,
      title: '文档中心',
      description: '产品使用手册和API文档',
      link: '/support/docs',
      items: ['快速入门', 'API参考', '开发指南'],
    },
    {
      icon: Download,
      title: '下载中心',
      description: '下载产品资料、软件和固件',
      link: '/support/downloads',
      items: ['产品手册', '软件工具', '固件更新'],
    },
    {
      icon: HelpCircle,
      title: '帮助中心',
      description: '常见问题解答和技术支持',
      link: '/support/help',
      items: ['常见问题', '故障排查', '提交工单'],
    },
  ];

  const faqItems = [
    {
      question: '如何申请产品演示？',
      answer: '您可以在产品详情页填写演示申请表单，或直接联系我们的销售团队。',
    },
    {
      question: '产品保修期是多久？',
      answer: '标准保修期为1年，可选购延保服务。保修期内免费维修和更换配件。',
    },
    {
      question: '是否提供技术培训？',
      answer: '我们提供完整的技术培训课程，包括线上视频教程和线下实操培训。',
    },
    {
      question: '支持定制开发吗？',
      answer: '是的，我们提供定制化开发服务，可根据客户需求进行软硬件定制。',
    },
  ];

  const downloadItems = [
    {
      name: 'DR02 产品手册',
      type: 'PDF',
      size: '8.5 MB',
      version: 'v2.0',
    },
    {
      name: 'X30 技术规格书',
      type: 'PDF',
      size: '5.2 MB',
      version: 'v1.8',
    },
    {
      name: 'SDK开发工具包',
      type: 'ZIP',
      size: '125 MB',
      version: 'v3.2',
    },
    {
      name: '固件更新包',
      type: 'BIN',
      size: '45 MB',
      version: 'v2.1.5',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              服务支持
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              全方位的技术支持和服务，助力您的项目成功
            </p>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:border-primary/50 hover:shadow-elevated hover:shadow-primary/20 transition-all duration-500 group"
              >
                <Link to={category.link}>
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center text-xs text-muted-foreground"
                      >
                        <div className="w-1 h-1 rounded-full bg-primary mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            常见问题
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              查看更多问题
            </Button>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            常用下载
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadItems.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:border-primary/50 hover:shadow-elevated hover:shadow-primary/20 transition-all duration-500"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{item.type}</span>
                      <span>{item.size}</span>
                      <span>版本 {item.version}</span>
                    </div>
                  </div>
                  <Button variant="glow" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/support/downloads">访问下载中心</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            需要更多帮助？
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            我们的技术支持团队随时为您服务
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              联系技术支持
            </Button>
            <Button variant="outline" size="lg">
              提交工单
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
