import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-robots.jpg';

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();

  // This would normally come from an API or data file
  const article = {
    id: id || 'news-1',
    title: '云深处发布新一代人形机器人DR02',
    date: '2024-01-15',
    author: '云深处编辑部',
    category: '公司新闻',
    image: heroImage,
    content: `
      <p>2024年1月15日，云深处机器人科技有限公司正式发布新一代人形机器人DR02。这款机器人采用全新的AI控制系统，在运动能力和智能水平上实现了重大突破。</p>
      
      <h2>技术突破</h2>
      <p>DR02高度达到170cm，重量65kg，配备41个高精度伺服关节，能够实现流畅自然的人类动作模拟。相比上一代产品DR01，DR02在关节数量、运动精度、负载能力等方面都有显著提升。</p>
      
      <p>在AI控制系统方面，DR02采用了最新的深度学习算法，配备多模态感知系统，支持视觉、听觉、触觉融合，可在复杂环境中自主导航和作业。机器人的环境感知能力和决策能力达到行业领先水平。</p>
      
      <h2>应用场景</h2>
      <p>DR02可广泛应用于工业巡检、商业服务、教育科研、展览展示等多个领域。在工业巡检场景中，DR02可代替人工进行高危环境的设备检查；在商业服务场景中，可提供智能导览、接待等服务；在教育科研领域，可作为机器人教学和研究的理想平台。</p>
      
      <h2>市场前景</h2>
      <p>人形机器人被认为是未来机器人产业的重要发展方向。随着技术的不断成熟和成本的逐步降低，人形机器人将在越来越多的场景中得到应用。云深处作为国内领先的智能机器人企业，通过持续的技术创新，不断推动人形机器人产业的发展。</p>
      
      <p>DR02的发布标志着云深处在人形机器人领域取得了新的突破，也展现了中国智能机器人产业的强劲实力。</p>
    `,
    tags: ['人形机器人', 'DR02', '新品发布', 'AI技术'],
  };

  const relatedNews = [
    {
      id: 'news-2',
      title: '四足机器人X30荣获国际工业设计金奖',
      excerpt: 'X30凭借出色的工业设计和卓越性能，获得国际工业设计金奖...',
      date: '2024-01-10',
      category: '媒体报道',
    },
    {
      id: 'news-3',
      title: '云深处与某电力公司达成战略合作',
      excerpt: '双方将在电力巡检领域深度合作，部署200台智能巡检机器人...',
      date: '2024-01-05',
      category: '公司新闻',
    },
    {
      id: 'news-4',
      title: '深度解析：机器人运动控制的核心技术',
      excerpt: '本文详细介绍了云深处机器人运动控制系统的技术原理...',
      date: '2023-12-28',
      category: '技术文章',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Back Button */}
      <section className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/news">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回新闻列表
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <span className="px-3 py-1 text-sm font-medium bg-primary/20 text-primary border border-primary/30 rounded-full">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-6 mb-6">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {article.date}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {article.author}
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden shadow-card border border-border mb-12">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto aspect-video object-cover"
            />
          </div>

          {/* Article Body */}
          <div
            className="prose prose-lg prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-secondary text-foreground border border-border rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Share2 className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">分享文章</span>
              </div>
              <div className="flex items-center space-x-3">
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </button>
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </button>
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </button>
              </div>
            </div>
          </Card>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">相关文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedNews.map((news) => (
              <NewsCard
                key={news.id}
                id={news.id}
                title={news.title}
                excerpt={news.excerpt}
                date={news.date}
                category={news.category}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsDetail;
