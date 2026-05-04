import { categories, type Category } from "@/data/mockData";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selected: Category | null;
  onSelect: (cat: Category | null) => void;
}

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
          selected === null
            ? "hero-gradient text-primary-foreground shadow-md"
            : "bg-accent text-accent-foreground hover:bg-accent/80"
        )}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.name}
          onClick={() => onSelect(cat.name)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
            selected === cat.name
              ? "hero-gradient text-primary-foreground shadow-md"
              : "bg-accent text-accent-foreground hover:bg-accent/80"
          )}
        >
          {cat.emoji} {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
