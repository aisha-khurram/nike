const tags = [
    "Lifestyle",
    "Running",
    "Basketball",
    "Jordan",
    "Training & Gym",
    "Soccer",
    "Golf",
    "Tennis",
    "Walking",
    "Baseball",
    "Skateboarding",
    "Football",
    "Dance",
    "Volleyball"
  ];
  
  export default function RelatedTags() {
    return (
      <div className="px-6 py-8 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto">
          <h3 className="text-base font-medium mb-4">Related Tags</h3>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 rounded-full border border-gray-300 text-sm hover:border-gray-400 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }