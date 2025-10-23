import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const positions = [
    {
      id: '1',
      title: '高级机器人算法工程师',
      department: '研发部',
      location: '深圳',
      type: '全职',
      salary: '30-50K',
      requirements: [
        '硕士及以上学历，计算机、自动化、机器人相关专业',
        '3年以上机器人算法开发经验',
        '熟练掌握运动规划、控制算法',
        '熟悉ROS或类似机器人框架',
      ],
    },
    {
      id: '2',
      title: '计算机视觉工程师',
      department: '研发部',
      location: '北京',
      type: '全职',
      salary: '25-40K',
      requirements: [
        '本科及以上学历，计算机视觉相关专业',
        '2年以上计算机视觉开发经验',
        '精通深度学习，熟悉PyTorch或TensorFlow',
        '有SLAM、目标检测经验优先',
      ],
    },
    {
      id: '3',
      title: '嵌入式软件工程师',
      department: '研发部',
      location: '深圳',
      type: '全职',
      salary: '20-35K',
      requirements: [
        '本科及以上学历，计算机、电子相关专业',
        '3年以上嵌入式开发经验',
        '精通C/C++，熟悉Linux开发',
        '有实时操作系统经验优先',
      ],
    },
    {
      id: '4',
      title: '机械设计工程师',
      department: '硬件部',
      location: '深圳',
      type: '全职',
      salary: '20-30K',
      requirements: [
        '本科及以上学历，机械设计相关专业',
        '3年以上机械设计经验',
        '精通SolidWorks或CATIA',
        '有机器人结构设计经验优先',
      ],
    },
  ];

  const benefits = [
    '具有竞争力的薪酬待遇',
    '五险一金，补充商业保险',
    '弹性工作制，年假15天起',
    '定期体检和团建活动',
    '技术培训和职业发展机会',
    '期权激励计划',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            加入云深处
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            与顶尖团队一起，用智能机器人改变世界
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            为什么选择云深处
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">前沿技术</h3>
              <p className="text-muted-foreground">
                接触最前沿的机器人技术，参与具有挑战性的项目，在实践中快速成长
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">顶尖团队</h3>
              <p className="text-muted-foreground">
                与来自清华、北大、MIT等名校的博士团队共事，学习业界最佳实践
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">广阔前景</h3>
              <p className="text-muted-foreground">
                机器人产业正处于爆发期，与公司一起成长，共享行业红利
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            热招职位
          </h2>
          <div className="space-y-6">
            {positions.map((position) => (
              <Card key={position.id} className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {position.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-2" />
                        {position.salary}
                      </div>
                    </div>
                  </div>
                  <Button variant="hero">申请职位</Button>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    任职要求：
                  </h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, index) => (
                      <li
                        key={index}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2 mr-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            福利待遇
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 flex items-center hover:border-primary/50 hover:shadow-elevated hover:shadow-primary/20 transition-all duration-500"
              >
                <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            没有找到合适的职位？
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            欢迎将简历发送至 hr@yunshen-robotics.com
          </p>
          <Button variant="outline" size="lg">
            发送简历
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
