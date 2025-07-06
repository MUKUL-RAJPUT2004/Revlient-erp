# Revlient ERP - Content Management Documentation

## Overview
This documentation provides step-by-step instructions for updating content and adding new testimonials or features to the Revlient ERP website. The project is built with React and uses component-based architecture.

---

## 1. How to Update Content

### 1.1 Text Content Updates

#### Hero Section (`src/components/Hero.jsx`)
**Location:** Lines 40-60
```jsx
// Update main heading
<h1 className="...">
  Transform Your Education Business with
  <span className="...">
    Revlient ERP
  </span>
</h1>

// Update subtitle
<p className="...">
  The complete ERP solution designed specifically for education consultancies.
  <span className="...">
    Streamline operations, boost productivity, and grow your business.
  </span>
</p>
```

#### Benefits Section (`src/components/Hero.jsx`)
**Location:** Lines 8-25
```jsx
const benefits = [
  { 
    icon: Users, 
    title: 'Track Student Applications', 
    description: 'Monitor and manage all student applications in one centralized dashboard',
    gradient: 'from-[#FF6F61] to-[#E55B4D]'
  },
  // Add/modify benefits here
];
```

#### Statistics (`src/components/Hero.jsx`)
**Location:** Lines 27-32
```jsx
const stats = [
  { number: '10K+', label: 'Active Users', icon: Users },
  { number: '99.9%', label: 'Uptime', icon: TrendingUp },
  { number: '24/7', label: 'Support', icon: Star },
  { number: '50+', label: 'Countries', icon: Zap }
];
```

### 1.2 About Section (`src/components/About.jsx`)
- Update company description, mission, and values
- Modify team information and achievements
- Change statistics and metrics

### 1.3 Pricing Section (`src/components/Pricing.jsx`)
- Update pricing plans and features
- Modify pricing tiers and costs
- Change plan descriptions and benefits

### 1.4 FAQ Section (`src/components/FAQ.jsx`)
- Add new frequently asked questions
- Update existing answers
- Modify categories and topics

---

## 2. How to Add Testimonials

### 2.1 Adding New Testimonials

**File:** `src/components/Testimonial.jsx`
**Location:** Lines 6-35

#### Step-by-Step Process:

1. **Open the testimonials array:**
```jsx
const testimonials = [
  // Existing testimonials...
];
```

2. **Add new testimonial object:**
```jsx
{
  id: 5, // Increment from last testimonial
  name: 'Client Name',
  company: 'Company Name',
  role: 'Position/Role',
  content: 'Testimonial text here. Keep it concise but impactful.',
  rating: 5, // 1-5 stars
  image: 'https://images.pexels.com/photos/...' // Profile image URL
}
```

#### Example New Testimonial:
```jsx
{
  id: 5,
  name: 'Jennifer Smith',
  company: 'Global Education Partners',
  role: 'Operations Manager',
  content: 'Revlient ERP has revolutionized our student management process. The automation features have saved us countless hours and improved our client satisfaction significantly.',
  rating: 5,
  image: 'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
}
```

### 2.2 Testimonial Image Guidelines

**Image Requirements:**
- Use professional headshots
- Square aspect ratio (150x150px recommended)
- High-quality images (Pexels, Unsplash, or client-provided)
- Ensure proper permissions for image usage

**Image Sources:**
- Pexels: `https://images.pexels.com/photos/[ID]/pexels-photo-[ID].jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop`
- Unsplash: `https://images.unsplash.com/photo-[ID]?w=150&h=150&fit=crop`

### 2.3 Testimonial Content Best Practices

**Content Guidelines:**
- Keep testimonials between 50-100 words
- Include specific benefits and results
- Mention specific features used
- Use authentic, client-approved language
- Include measurable outcomes when possible

---

## 3. How to Add New Features

### 3.1 Adding Core Features

**File:** `src/components/CoreFeatures.jsx`
**Location:** Lines 13-45

#### Step-by-Step Process:

1. **Import required icon:**
```jsx
import { 
  Users, 
  Calendar, 
  FileText, 
  DollarSign, 
  BarChart3, 
  MessageSquare,
  Shield,
  Globe,
  Zap,
  // Add new icon here
  NewIcon
} from 'lucide-react';
```

2. **Add new feature to the features array:**
```jsx
const features = [
  // Existing features...
  {
    icon: NewIcon,
    title: 'New Feature Name',
    description: 'Clear, concise description of the feature and its benefits.'
  }
];
```

#### Example New Feature:
```jsx
{
  icon: Database,
  title: 'Advanced Analytics',
  description: 'Deep insights into student performance and business metrics with customizable reports.'
}
```

### 3.2 Adding Custom Features Section

**File:** `src/components/Customization.jsx`
- Update customization options
- Add new integration possibilities
- Modify workflow descriptions

### 3.3 Adding Why Choose Us Features

**File:** `src/components/WhyChooseUs.jsx`
- Add new competitive advantages
- Update unique selling points
- Modify feature comparisons

---

## 4. Content Update Checklist

### Before Publishing:
- [ ] Review all text for grammar and spelling
- [ ] Verify all links are working
- [ ] Check image quality and permissions
- [ ] Test responsive design on different screen sizes
- [ ] Ensure consistent branding and messaging
- [ ] Update any related statistics or metrics
- [ ] Verify testimonial authenticity and permissions

### Content Guidelines:
- **Tone:** Professional, trustworthy, solution-focused
- **Length:** Concise but informative
- **Keywords:** Include relevant SEO terms naturally
- **Call-to-Action:** Clear and compelling
- **Branding:** Consistent with Revlient ERP identity

---

## 5. Technical Notes

### File Structure:
```
src/
├── components/
│   ├── Hero.jsx          # Main landing section
│   ├── About.jsx         # Company information
│   ├── CoreFeatures.jsx  # Feature showcase
│   ├── Testimonial.jsx   # Client testimonials
│   ├── Pricing.jsx       # Pricing plans
│   └── ...
└── App.jsx               # Main component
```

### Styling:
- Uses Tailwind CSS for styling
- Responsive design with mobile-first approach
- Dark mode support included
- Custom color scheme: `#FF6F61` (primary coral)

### Icons:
- Uses Lucide React icons
- Import icons as needed: `import { IconName } from 'lucide-react'`
- Available icons: https://lucide.dev/icons/

---

## 6. Quick Reference

### Common Updates:
- **Company Name:** Search for "Revlient ERP" across all files
- **Contact Information:** Update in `ContactUs.jsx`
- **Pricing:** Modify in `Pricing.jsx`
- **Features:** Update in `CoreFeatures.jsx`
- **Testimonials:** Add in `Testimonial.jsx`

### File Locations:
- Main content: `src/components/`
- Styling: `src/index.css`
- Configuration: `tailwind.config.js`
- Dependencies: `package.json`

---

## 7. Support

For technical issues or questions about content updates:
1. Check this documentation first
2. Review the component files for examples
3. Test changes locally before deployment
4. Maintain backup of original content

**Last Updated:** 06-07-2025
**Version:** 1.0 