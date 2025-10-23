import { Link } from 'react-router-dom';
import { Target, Eye, Users, Award, MapPin, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import heroImage from '@/assets/hero-robots.jpg';

const About = () => {
  const milestones = [
    { year: '2018', event: '公司成立，开始四足机器人研发' },
    { year: '2019', event: '发布首款四足机器人Lite1' },
    { year: '2020', event: '完成A轮融资，团队扩充至100人' },
    { year: '2021', event: 'X30工业级四足机器人上市' },
    { year: '2022', event: '完成B轮融资，建立全球研发中心' },
    { year: '2023', event: '推出人形机器人DR01和轮腿机器人M20' },
    { year: '2024', event: '发布新一代DR02，产品线全面升级' },
  ];

  const partners = [
    '国家电网',
    '中国移动',
    '华为',
    '腾讯',
    '比亚迪',
    '清华大学',
    '北京大学',
    '中科院',
  ];

  const values = [
    {
      icon: Target,
      title: '使命',
      description: '让智能机器人服务千行百业，推动产业智能化升级',
    },
    {
      icon: Eye,
      title: '愿景',
      description: '成为全球领先的智能机器人技术公司',
    },
    {
      icon: Users,
      title: '价值观',
      description: '创新、专注、开放、共赢',
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
              关于云深处
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              引领智能机器人技术创新，推动产业智能化升级
            </p>
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                云深处机器人科技
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                云深处机器人科技有限公司成立于2018年，是一家专注于智能机器人研发和制造的高科技企业。公司总部位于深圳，在北京、上海、杭州设有研发中心。
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                我们拥有一支由清华、北大、MIT等名校博士组成的顶尖研发团队，在人工智能、机器视觉、运动控制等领域拥有深厚的技术积累。公司已获得100余项发明专利，产品出口至20多个国家和地区。
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                云深处致力于成为全球领先的智能机器人技术公司，为各行业提供高性能、高可靠性的机器人产品和解决方案，推动产业智能化转型。
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card border border-border">
              <img
                src={heroImage}
                alt="云深处团队"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            发展历程
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={cn(
                    'relative flex items-center',
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  )}
                >
                  <div
                    className={cn(
                      'flex-1',
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                    )}
                  >
                    <Card className="p-6 inline-block">
                      <div className="text-2xl font-bold text-gradient mb-2">
                        {milestone.year}
                      </div>
                      <p className="text-muted-foreground">{milestone.event}</p>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            合作伙伴
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="p-6 flex items-center justify-center text-center hover:border-primary/50 hover:shadow-elevated hover:shadow-primary/20 transition-all duration-500"
              >
                <div className="text-lg font-semibold text-foreground">
                  {partner}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            团队实力
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-gradient mb-2">500+</div>
              <p className="text-lg text-muted-foreground">员工总数</p>
            </Card>
            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-gradient mb-2">200+</div>
              <p className="text-lg text-muted-foreground">研发人员</p>
            </Card>
            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-gradient mb-2">100+</div>
              <p className="text-lg text-muted-foreground">发明专利</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Careers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">联系我们</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>总部：</strong>深圳市南山区科技园
                </p>
                <p>
                  <strong>电话：</strong>400-888-8888
                </p>
                <p>
                  <strong>邮箱：</strong>contact@yunshen-robotics.com
                </p>
              </div>
              <Button variant="hero" size="lg" className="mt-6 w-full">
                <Mail className="mr-2 h-5 w-5" />
                发送邮件
              </Button>
            </Card>

            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">加入我们</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                我们正在寻找充满激情和创新精神的人才加入团队。如果您对机器人技术充满热情，期待与顶尖团队一起改变世界，欢迎加入云深处！
              </p>
              <Button asChild variant="glow" size="lg" className="w-full">
                <Link to="/careers">查看职位</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
