export const brand = {
  name: "Little Sprouts",
  tagline: "Where Little Imaginations Grow Big",
  subtagline: "A warm, nurturing place where children learn, play, and grow with joy every single day.",
  owner: "Kassie",
  yearsExperience: 10,
  location: "Central Texas / I-35 Corridor",
  phone: "(512) 555-0100",
  email: "hello@littlesproutsdaycare.com",
  nav: ["Home", "About", "Programs", "Parents", "Gallery", "Contact"],
  testimonials: [
    {
      quote: "Kassie and her staff love my kiddos just like their own since the beginning.",
      author: "Izaila M.",
      tenure: "Parent for 3 years",
    },
    {
      quote: "My son has ADHD and this is the first place he's truly thrived. They get him.",
      author: "Marcus T.",
      tenure: "Parent for 2 years",
    },
    {
      quote: "I drive 20 minutes past three other daycares to bring my daughter here. Worth every mile.",
      author: "Priya S.",
      tenure: "Parent for 18 months",
    },
  ],
  stats: [
    { value: "10+", label: "Years of Care" },
    { value: "95%", label: "Families Refer Others" },
    { value: "100%", label: "Licensed & Inspected" },
    { value: "4:1", label: "Child-to-Caregiver Ratio" },
  ],
  aboutSection: {
    heading: "A Place to Grow, A Place to Belong",
    body: "We see each child as a unique individual with endless potential. Our caring team is here to nurture every step of the way.",
  },
} as const;
