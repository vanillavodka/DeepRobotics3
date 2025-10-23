import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Cog, Puzzle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ApplicationCard from '@/components/ApplicationCard';
import NewsCard from '@/components/NewsCard';
import { products } from '@/data/products';
import { applications } from '@/data/applications';
import heroImage from '@/assets/hero-robots.jpg';

const Home = () => {
  const featuredProducts = products.slice(0, 3);
  const featuredApplications = applications.slice(0, 6);

  const techFeatures = [
    {
      icon: Cpu,
      title: 'AI智能控制',
      description: '基于深度学习的运动控制系统，实现自主导航、环境感知和智能决策',
    },
    {
      icon: Cog,
      title: '运动系统',
      description: '高性能伺服驱动系统，精准的运动控制和强大的环境适应能力',
    },
    {
      icon: Puzzle,
      title: '模块化设计',
      description: '标准化接口和模块化架构，支持快速定制和功能扩展',
    },
  ];

  const newsItems = [
    {
      id: 'news-1',
      title: '云深处发布新一代人形机器人DR02',
      excerpt: 'DR02采用全新AI控制系统，运动能力和智能水平大幅提升，将在多个行业展开应用...',
      date: '2024-01-15',
      category: '公司新闻',
      image: heroImage,
    },
    {
      id: 'news-2',
      title: '四足机器人X30荣获工业设计大奖',
      excerpt: 'X30凭借出色的工业设计和卓越性能，获得国际工业设计金奖，展现中国智造实力...',
      date: '2024-01-10',
      category: '行业动态',
    },
    {
      id: 'news-3',
      title: '云深处与某电力公司达成战略合作',
      excerpt: '双方将在电力巡检领域深度合作，共同推动电力行业智能化转型升级...',
      date: '2024-01-05',
      category: '合作伙伴',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="云深处机器人"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="block text-gradient mb-2">引领智能机器人</span>
            <span className="block text-foreground">Pioneering Intelligent Robotics</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-slide-up">
            以创新技术驱动产业变革，让机器人赋能各行各业
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button asChild variant="hero" size="lg">
              <Link to="/products">
                探索产品
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/applications">行业方案</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              行业应用
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              为多个行业提供专业的机器人解决方案
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredApplications.map((app) => (
              <ApplicationCard
                key={app.id}
                id={app.id}
                title={app.title}
                description={app.description}
                image={app.image}
                icon={app.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              热门产品
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              高性能机器人产品矩阵，满足不同场景需求
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                nameEn={product.nameEn}
                category={product.category}
                image={product.image}
                description={product.description}
                specs={product.specs}
              />
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="glow" size="lg">
              <Link to="/products">
                查看全部产品
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Highlights */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              核心技术
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              自主研发的核心技术体系
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-elevated hover:shadow-primary/20 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                最新动态
              </h2>
              <p className="text-lg text-muted-foreground">
                了解云深处最新资讯
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/news">
                查看更多
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <NewsCard
                key={news.id}
                id={news.id}
                title={news.title}
                excerpt={news.excerpt}
                date={news.date}
                category={news.category}
                image={news.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative rounded-2xl overflow-hidden p-12 md:p-20 text-center">
            <div className="absolute inset-0 gradient-primary opacity-10" />
            <div className="relative z-10">
              <TrendingUp className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                开启智能化转型之旅
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                联系我们的专家团队，获取专属解决方案
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  预约演示
                </Button>
                <Button variant="outline" size="lg">
                  下载资料
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
