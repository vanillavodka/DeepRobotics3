import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import heroImage from '@/assets/hero-robots.jpg';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: '全部新闻' },
    { id: 'company', name: '公司新闻' },
    { id: 'tech', name: '技术文章' },
    { id: 'press', name: '媒体报道' },
    { id: 'events', name: '活动动态' },
  ];

  const newsItems = [
    {
      id: 'news-1',
      title: '云深处发布新一代人形机器人DR02',
      excerpt:
        'DR02采用全新AI控制系统，运动能力和智能水平大幅提升，将在多个行业展开应用。配备41个自由度关节，可实现流畅的人类动作模拟...',
      date: '2024-01-15',
      category: '公司新闻',
      categoryId: 'company',
      image: heroImage,
    },
    {
      id: 'news-2',
      title: '四足机器人X30荣获国际工业设计金奖',
      excerpt:
        'X30凭借出色的工业设计和卓越性能，获得国际工业设计金奖，展现中国智造实力。这是继Lite3获奖后，云深处再次在国际舞台上获得认可...',
      date: '2024-01-10',
      category: '媒体报道',
      categoryId: 'press',
    },
    {
      id: 'news-3',
      title: '云深处与某电力公司达成战略合作',
      excerpt:
        '双方将在电力巡检领域深度合作，部署200台智能巡检机器人，共同推动电力行业智能化转型升级，预计年巡检次数将提升500%...',
      date: '2024-01-05',
      category: '公司新闻',
      categoryId: 'company',
    },
    {
      id: 'news-4',
      title: '深度解析：机器人运动控制的核心技术',
      excerpt:
        '本文详细介绍了云深处机器人运动控制系统的技术原理，包括步态规划、平衡控制、力控制等关键技术。通过多年研发，我们已经建立了完整的技术体系...',
      date: '2023-12-28',
      category: '技术文章',
      categoryId: 'tech',
    },
    {
      id: 'news-5',
      title: '云深处参展2024世界机器人大会',
      excerpt:
        '公司将携全系列产品参展2024世界机器人大会，现场展示最新技术成果和应用案例。届时将有多场技术论坛和产品演示...',
      date: '2023-12-20',
      category: '活动动态',
      categoryId: 'events',
    },
    {
      id: 'news-6',
      title: 'AI赋能：新一代智能机器人控制系统',
      excerpt:
        '云深处最新研发的AI控制系统，融合了计算机视觉、深度学习、强化学习等多项前沿技术，使机器人具备更强的环境感知和决策能力...',
      date: '2023-12-15',
      category: '技术文章',
      categoryId: 'tech',
    },
    {
      id: 'news-7',
      title: '云深处完成新一轮融资，加速全球化布局',
      excerpt:
        '公司宣布完成C轮融资，融资金额达5亿元，本轮融资将主要用于技术研发、产能扩充和全球市场拓展...',
      date: '2023-12-10',
      category: '公司新闻',
      categoryId: 'company',
    },
    {
      id: 'news-8',
      title: '权威媒体专访：云深处的机器人梦想',
      excerpt:
        '《科技日报》专访云深处创始人，探讨中国机器人产业的发展现状和未来趋势，以及云深处的技术创新之路...',
      date: '2023-12-05',
      category: '媒体报道',
      categoryId: 'press',
    },
    {
      id: 'news-9',
      title: '云深处机器人学院正式启动',
      excerpt:
        '面向高校和科研机构，云深处正式启动机器人学院项目，提供完整的教学资源和实验平台，培养机器人领域专业人才...',
      date: '2023-11-30',
      category: '活动动态',
      categoryId: 'events',
    },
  ];

  const filteredNews =
    selectedCategory === 'all'
      ? newsItems
      : newsItems.filter((n) => n.categoryId === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              新闻资讯
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              了解云深处最新动态和行业洞察
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border sticky top-16 z-40 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  'transition-all duration-300',
                  selectedCategory === category.id && 'glow-primary'
                )}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <div key={news.id} className="animate-fade-in">
                <NewsCard
                  id={news.id}
                  title={news.title}
                  excerpt={news.excerpt}
                  date={news.date}
                  category={news.category}
                  image={news.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
