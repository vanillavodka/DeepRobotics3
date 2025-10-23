import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ApplicationCard from '@/components/ApplicationCard';
import { applications } from '@/data/applications';

const Applications = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              行业应用
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              为多个行业提供专业的机器人解决方案，推动产业智能化升级
            </p>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app) => (
              <div key={app.id} className="animate-fade-in">
                <ApplicationCard
                  id={app.id}
                  title={app.title}
                  description={app.description}
                  image={app.image}
                  icon={app.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            探索更多行业解决方案
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            我们的团队将根据您的具体需求，提供定制化的机器人解决方案
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Applications;
