import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ProductCardProps {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  image: string;
  description: string;
  specs?: string[];
}

const ProductCard = ({ id, name, nameEn, category, image, description, specs }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-500 hover:shadow-elevated hover:shadow-primary/20">
      <Link to={`/products/${id}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary border border-primary/30 rounded-full backdrop-blur-sm">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-2">
            <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground">{nameEn}</p>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>
          
          {specs && specs.length > 0 && (
            <div className="mb-4 space-y-1">
              {specs.slice(0, 2).map((spec, index) => (
                <div key={index} className="flex items-center text-xs text-muted-foreground">
                  <div className="w-1 h-1 rounded-full bg-primary mr-2" />
                  {spec}
                </div>
              ))}
            </div>
          )}
          
          <Button variant="glow" size="sm" className="w-full group-hover:w-full">
            了解更多
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </Link>
    </Card>
  );
};

export default ProductCard;
