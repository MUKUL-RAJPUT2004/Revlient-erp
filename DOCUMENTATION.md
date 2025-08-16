# Revlient ERP - Client Content Management Guide

## Overview
This comprehensive guide provides easy-to-follow instructions for updating content, adding testimonials, and implementing new features on the Revlient ERP website. No technical background required - just follow the steps!

**Quick Navigation:**
- [Content Updates](#1-how-to-update-content)
- [Adding Testimonials](#2-how-to-add-testimonials)
- [Adding New Features](#3-how-to-add-new-features)
- [Step-by-Step Tutorials](#8-step-by-step-tutorials)
- [Quick Reference](#6-quick-reference)

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

## 7. Common Content Types & Locations

### Website Sections Overview:

| Section | File Location | What You Can Update |
|---------|---------------|--------------------|
| **Homepage Hero** | `src/components/Hero.jsx` | Main headline, subtitle, call-to-action buttons |
| **About Us** | `src/components/About.jsx` | Company story, mission, team info |
| **Features** | `src/components/CoreFeatures.jsx` | Product features and descriptions |
| **Testimonials** | `src/components/Testimonial.jsx` | Client reviews and success stories |
| **Pricing** | `src/components/Pricing.jsx` | Plans, prices, feature lists |
| **FAQ** | `src/components/FAQ.jsx` | Questions and answers |
| **Contact** | `src/components/ContactUs.jsx` | Contact information, form |
| **Footer** | `src/components/Footer.jsx` | Links, company info, social media |

### Content Types You Can Update:

#### 📝 **Text Content**
- Headlines and subheadings
- Descriptions and explanations
- Button text and labels
- Company information
- Contact details

#### 📊 **Data & Statistics**
- User counts and metrics
- Pricing information
- Success rates and percentages
- Performance indicators

#### 🎨 **Visual Elements**
- Image URLs and alt text
- Color schemes (with hex codes)
- Icon selections
- Layout arrangements

---

## 8. Step-by-Step Tutorials

### 📋 Tutorial 1: Updating Homepage Hero Text

**Goal:** Change the main headline on your homepage

**Steps:**
1. Open `src/components/Hero.jsx`
2. Find the section around line 16-21 (look for `<h1 className`)
3. Replace the text between `>` and `<` tags:
   ```jsx
   // OLD:
   <h1>Transform Your Education Business with Revlient ERP</h1>
   
   // NEW (example):
   <h1>Revolutionize Your Education Consultancy with Revlient ERP</h1>
   ```
4. Save the file
5. Preview your changes

### 👥 Tutorial 2: Adding a New Testimonial

**Goal:** Add a client testimonial to build trust

**Steps:**
1. Open `src/components/Testimonial.jsx`
2. Find the `testimonials = [` array (around line 6)
3. Add a comma after the last testimonial
4. Copy this template and fill in your details:
   ```jsx
   {
     id: 6, // Next number in sequence
     name: 'Your Client Name',
     company: 'Their Company Name',
     role: 'Their Job Title',
     content: 'What they said about your service (50-100 words)',
     rating: 5, // 1-5 stars
     image: 'https://images.pexels.com/photos/[PHOTO-ID]/pexels-photo-[PHOTO-ID].jpeg?w=150&h=150&fit=crop'
   }
   ```
5. Save the file

### 🚀 Tutorial 3: Adding a New Feature

**Goal:** Highlight a new product feature

**Steps:**
1. Open `src/components/CoreFeatures.jsx`
2. Find the `features = [` array (around line 13)
3. Choose an icon from [Lucide Icons](https://lucide.dev/icons/)
4. Add the icon to the import statement at the top:
   ```jsx
   import { Users, Calendar, FileText, YourNewIcon } from 'lucide-react';
   ```
5. Add your feature to the array:
   ```jsx
   {
     icon: YourNewIcon,
     title: 'Your Feature Name',
     description: 'Brief description of what this feature does and its benefits.'
   }
   ```
6. Save the file

### 💰 Tutorial 4: Updating Pricing

**Goal:** Update pricing plans or add new tiers

**Steps:**
1. Open `src/components/Pricing.jsx`
2. Find the pricing data structure
3. Update prices, features, or plan names:
   ```jsx
   // Example pricing structure
   {
     name: 'Basic Plan',
     price: '$29',
     period: '/month',
     features: [
       'Feature 1',
       'Feature 2',
       'Feature 3'
     ]
   }
   ```
4. Save the file

---

## 9. Content Best Practices

### ✅ Writing Guidelines

**Headlines:**
- Keep under 60 characters for SEO
- Use action words (Transform, Boost, Streamline)
- Focus on benefits, not features

**Descriptions:**
- Write in active voice
- Use bullet points for lists
- Keep paragraphs under 3 sentences
- Include specific numbers when possible

**Testimonials:**
- Get written permission from clients
- Include specific results/improvements
- Keep between 50-100 words
- Use real names and companies (with permission)

### 🎯 SEO-Friendly Content

**Keywords to Include:**
- ERP for education
- Student management system
- Education consultancy software
- CRM for education
- Student application tracking

**Meta Descriptions:**
- Keep under 155 characters
- Include primary keywords
- Add a call-to-action

### 📱 Mobile-First Writing

- Keep headlines short and scannable
- Use plenty of white space
- Break up long text blocks
- Test on mobile devices

---

## 10. Troubleshooting

### ❗ Common Issues

**Problem:** Text appears broken or cut off
- **Solution:** Check for missing closing tags (`</h1>`, `</p>`)
- **Prevention:** Always copy the complete text structure

**Problem:** New testimonial doesn't appear
- **Solution:** Ensure you added a comma after the previous testimonial
- **Prevention:** Follow the exact format in the documentation

**Problem:** Icons don't show up
- **Solution:** Make sure the icon is imported at the top of the file
- **Prevention:** Always add imports before using new icons

**Problem:** Pricing table looks broken
- **Solution:** Check that all required fields are included
- **Prevention:** Use the provided templates

### 🔧 Before You Start Editing

**Essential Steps:**
1. **Backup:** Always save a copy of the original file
2. **Plan:** Write out your changes before editing
3. **Test:** Preview changes in a development environment first
4. **Review:** Double-check spelling and grammar

---

## 11. Support & Resources

### 📚 Helpful Resources

**For Images:**
- [Pexels](https://pexels.com) - Free professional photos
- [Unsplash](https://unsplash.com) - High-quality stock images
- [TinyPNG](https://tinypng.com) - Compress images for faster loading

**For Icons:**
- [Lucide Icons](https://lucide.dev/icons/) - Icon library used in the project
- [Heroicons](https://heroicons.com) - Alternative icon options

**For Colors:**
- Current theme colors: Primary `#FF6F61`, Secondary `#E55B4D`
- [Coolors](https://coolors.co) - Color palette generator

### 🆘 Getting Help

**When Requesting Help:**
- Describe what you're trying to achieve
- Include the specific file and line number
- Share the exact error message (if any)
- Mention what you've already tried

---

**Last Updated:** August 16, 2025
**Version:** 2.0
**Document Maintained By:** MUKUL RAJPUT
