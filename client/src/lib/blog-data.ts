export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "technology" | "case-study" | "industry-insights" | "best-practices";
  author: string;
  date: string;
  readTime: number;
  image: string;
  tags: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    id: "pipe-jacking-advantages",
    title: "The Complete Guide to Pipe Jacking Technology in Indonesia",
    excerpt: "Discover how pipe jacking revolutionizes underground pipeline installation with minimal surface disruption. Learn the key advantages, applications, and why it's the preferred method for modern infrastructure projects.",
    content: `
# The Complete Guide to Pipe Jacking Technology in Indonesia

Pipe jacking is a trenchless technology that has transformed the way we install underground pipelines. Unlike traditional open-cut excavation methods, pipe jacking allows for the installation of pipes and tunnels without destroying surface infrastructure.

## What is Pipe Jacking?

Pipe jacking is a method of installing pipes or tunnels by driving them into the ground using a tunnel boring machine (TBM). The process involves:

1. **Launching Shaft**: A shaft is constructed at the starting point to house the jacking frame and TBM
2. **Boring**: The TBM excavates the soil and advances the pipe segments
3. **Pipe Installation**: Precast concrete or steel pipe segments are jacked behind the TBM
4. **Reception Shaft**: At the end point, a reception shaft receives the completed tunnel

## Key Advantages

### Minimal Surface Disruption
Unlike traditional excavation, pipe jacking requires only small launch and reception shafts, leaving the surface largely undisturbed. This is critical in urban areas where roads, buildings, and utilities must remain operational.

### Cost Efficiency
By reducing surface restoration and traffic management costs, pipe jacking often proves more economical than open-cut methods, especially in congested urban environments.

### Precision and Control
Modern TBMs provide precise control over depth, alignment, and grade, ensuring high-quality installations that meet strict engineering standards.

### Environmental Benefits
Reduced surface disruption means lower environmental impact, less dust and noise pollution, and minimal disruption to local communities.

## Applications in Indonesia

Pipe jacking is increasingly used in Indonesia for:
- Water supply pipeline networks in major cities
- Wastewater collection systems
- Oil and gas infrastructure
- Telecommunications conduits
- Stormwater management systems

## Best Practices

1. **Comprehensive Site Analysis**: Thorough geological surveys ensure proper TBM selection and method optimization
2. **Proper Ground Support**: Ground improvement techniques may be necessary in soft or unstable soils
3. **Regular Monitoring**: Continuous monitoring of TBM performance ensures quality and safety
4. **Skilled Personnel**: Experienced operators and engineers are essential for successful projects

## Conclusion

Pipe jacking represents the future of underground infrastructure development in Indonesia. Its ability to minimize surface disruption while maintaining precision and quality makes it the preferred choice for modern projects.

At Maranti Trenchlesindo, we leverage decades of experience with pipe jacking technology to deliver projects that meet the highest standards of quality and safety.
    `,
    category: "technology",
    author: "Eng. Budi Santoso",
    date: "2026-04-10",
    readTime: 8,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663553601603/LEZSPyR7S5GiW2ZgZCtG9u/services-pipe-jacking-K3rBLekiUHQa5bGFQ3j6F3.webp",
    tags: ["pipe-jacking", "trenchless", "infrastructure", "technology"],
  },
  {
    id: "case-study-water-pipeline-jakarta",
    title: "Case Study: 5km Water Pipeline Installation in Jakarta Using Pipe Jacking",
    excerpt: "Learn how we successfully installed a 5-kilometer water pipeline in central Jakarta without disrupting traffic or damaging existing infrastructure. This case study demonstrates our expertise in complex urban projects.",
    content: `
# Case Study: 5km Water Pipeline Installation in Jakarta Using Pipe Jacking

## Project Overview

**Client**: Jakarta Water Authority (PAM Jaya)
**Location**: Central Jakarta, Indonesia
**Project Duration**: 18 months
**Pipeline Diameter**: 400mm reinforced concrete pipe
**Total Length**: 5.2 kilometers
**Method**: Pipe Jacking with Guided Auger Boring

## Challenge

Jakarta's dense urban environment presented significant challenges:
- Existing underground utilities (electrical, telecommunications, gas)
- Heavy traffic congestion requiring minimal surface disruption
- Soft soil conditions requiring specialized ground support
- Strict environmental regulations
- Tight project timeline

## Solution

Our team designed a comprehensive solution:

### 1. Detailed Site Investigation
We conducted extensive geological surveys and utility mapping to identify optimal jacking points and potential hazards.

### 2. TBM Selection
We selected a 400mm diameter slurry shield TBM specifically designed for soft ground conditions common in Jakarta.

### 3. Ground Support Strategy
- Slurry pressure balancing to prevent ground collapse
- Injection grouting for ground stabilization
- Real-time monitoring of ground movements

### 4. Logistics Planning
- Strategically placed launch and reception shafts to minimize surface impact
- Coordinated with local authorities for traffic management
- Scheduled work during off-peak hours

## Results

✓ **Zero surface damage** to existing infrastructure
✓ **On-time completion** despite challenging soil conditions
✓ **100% quality compliance** with all specifications
✓ **Minimal traffic disruption** through careful planning
✓ **Cost savings** of 15% compared to traditional methods

## Key Metrics

| Metric | Value |
|--------|-------|
| Pipeline Installed | 5.2 km |
| Pipe Segments | 1,300+ |
| Jacking Stations | 4 |
| Average Daily Progress | 28 meters |
| Safety Incidents | 0 |
| Quality Defects | 0 |

## Lessons Learned

1. **Comprehensive Planning**: Detailed pre-project investigation is crucial for success
2. **Real-time Monitoring**: Continuous data collection enables quick problem-solving
3. **Team Coordination**: Effective communication between all stakeholders is essential
4. **Quality Focus**: Strict quality control ensures long-term reliability

## Client Testimonial

"Maranti Trenchlesindo's expertise and professionalism exceeded our expectations. They delivered a world-class project on time and within budget, with zero disruption to our city's infrastructure. We look forward to working with them on future projects." — Director, PAM Jaya

## Conclusion

This project demonstrates our capability to handle complex, large-scale trenchless projects in challenging urban environments. Our combination of advanced technology, skilled personnel, and meticulous planning ensures project success.
    `,
    category: "case-study",
    author: "Project Manager: Rudi Hartono",
    date: "2026-04-08",
    readTime: 10,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663553601603/LEZSPyR7S5GiW2ZgZCtG9u/hero-trenchless-machinery-idRWeeKs9n66Qd293nwv43.webp",
    tags: ["case-study", "jakarta", "water-pipeline", "success-story"],
  },
  {
    id: "slope-protection-best-practices",
    title: "Slope Protection Best Practices: Soil Nailing Techniques for Stability",
    excerpt: "Explore the science and engineering behind effective slope protection. Learn about soil nailing techniques, design considerations, and best practices for ensuring long-term slope stability.",
    content: `
# Slope Protection Best Practices: Soil Nailing Techniques for Stability

## Introduction

Slope instability poses significant risks to infrastructure, property, and human safety. Soil nailing has emerged as one of the most effective and economical methods for slope stabilization. This article explores the principles, techniques, and best practices for implementing soil nailing solutions.

## Understanding Slope Failure

Slopes fail due to several factors:
- **Gravity**: The natural tendency of soil to move downslope
- **Water**: Pore pressure reducing soil strength
- **Erosion**: Surface weathering and material loss
- **Loading**: Additional weight from structures or fill

## Soil Nailing: How It Works

Soil nailing is a technique where steel nails are installed into a slope to reinforce the soil and increase its shear strength. The system works by:

1. **Nail Installation**: Steel bars are drilled and grouted into the slope
2. **Load Transfer**: Nails transfer tensile loads to stable soil layers
3. **Facing**: A reinforced concrete facing is constructed to prevent raveling
4. **Drainage**: Proper drainage systems prevent water accumulation

## Design Considerations

### Geological Assessment
- Soil type and properties
- Groundwater conditions
- Slope geometry and height
- Existing vegetation

### Nail Design
- Nail length and spacing
- Nail diameter and grade
- Grout specifications
- Installation angle

### Facing Design
- Concrete strength and thickness
- Reinforcement requirements
- Drainage provisions
- Aesthetic considerations

## Installation Process

1. **Site Preparation**: Clear and prepare the slope
2. **Drilling**: Install nails at designed spacing and angle
3. **Grouting**: Fill nail holes with high-strength grout
4. **Facing Installation**: Construct concrete facing
5. **Drainage**: Install drainage systems
6. **Monitoring**: Install settlement and inclinometer gauges

## Best Practices

### Quality Control
- Verify nail installation depth and alignment
- Test grout strength
- Inspect concrete facing quality
- Monitor drainage effectiveness

### Safety
- Proper PPE for all workers
- Fall protection systems
- Slope monitoring during and after construction
- Emergency response plans

### Maintenance
- Regular visual inspections
- Vegetation management
- Drainage maintenance
- Repair of any damage

## Case Application in Indonesia

Soil nailing is particularly effective in Indonesia due to:
- Tropical climate with high rainfall
- Mountainous terrain with steep slopes
- Urban development on hillsides
- Need for rapid stabilization

## Conclusion

Soil nailing, when properly designed and installed, provides a reliable, cost-effective solution for slope stabilization. Success requires comprehensive geological assessment, proper design, quality installation, and ongoing maintenance.

At Maranti Trenchlesindo, we combine engineering expertise with proven techniques to deliver slope protection solutions that stand the test of time.
    `,
    category: "best-practices",
    author: "Dr. Siti Nurhaliza",
    date: "2026-04-05",
    readTime: 7,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663553601603/LEZSPyR7S5GiW2ZgZCtG9u/services-slope-protection-cvD6etqXTpZ5QjmdTUZnRn.webp",
    tags: ["slope-protection", "soil-nailing", "best-practices", "engineering"],
  },
  {
    id: "trenchless-vs-traditional",
    title: "Trenchless vs Traditional Excavation: A Comprehensive Comparison",
    excerpt: "Compare trenchless technology with traditional open-cut excavation. Understand the cost, time, environmental, and quality differences to make informed decisions for your infrastructure projects.",
    content: `
# Trenchless vs Traditional Excavation: A Comprehensive Comparison

## Overview

The choice between trenchless technology and traditional open-cut excavation is critical for any underground infrastructure project. This comprehensive comparison will help you understand the advantages and limitations of each method.

## Cost Comparison

### Traditional Excavation
- Lower equipment costs
- Higher labor costs
- Significant surface restoration expenses
- Traffic management and disruption costs
- Potential damage liability costs

### Trenchless Technology
- Higher initial equipment investment
- Specialized skilled labor
- Minimal surface restoration
- Reduced traffic disruption costs
- Lower liability and contingency costs

**Result**: In urban areas, trenchless methods often prove more economical despite higher initial costs.

## Time Efficiency

### Traditional Excavation
- Longer project duration
- Weather-dependent work
- Surface restoration adds time
- Utility relocation delays

### Trenchless Technology
- Faster installation rates
- Weather-independent operation
- Minimal surface work
- Reduced coordination delays

**Result**: Trenchless methods typically reduce project duration by 30-50%.

## Environmental Impact

### Traditional Excavation
- Significant surface disruption
- Dust and noise pollution
- Soil disposal challenges
- Habitat disturbance
- Higher carbon footprint

### Trenchless Technology
- Minimal surface disruption
- Reduced pollution
- Minimal soil disposal
- Habitat preservation
- Lower carbon footprint

**Result**: Trenchless methods are significantly more environmentally friendly.

## Quality and Precision

### Traditional Excavation
- Variable quality depending on conditions
- Manual installation processes
- Potential for misalignment
- Weather-related quality issues

### Trenchless Technology
- Consistent, high-quality results
- Automated precision control
- Precise alignment and grade
- Weather-independent quality

**Result**: Trenchless methods deliver superior quality and precision.

## Urban vs Rural Applications

### Urban Areas
Trenchless technology is preferred because:
- Minimal disruption to traffic and businesses
- Protection of existing utilities
- Reduced noise and dust complaints
- Lower overall costs

### Rural Areas
Traditional excavation may be suitable because:
- Lower initial equipment costs
- Less concern about surface disruption
- Simpler logistics
- Adequate space for equipment

## When to Use Each Method

### Choose Trenchless When:
- Working in congested urban areas
- Protecting existing infrastructure is critical
- Project timeline is tight
- Environmental concerns are paramount
- Long-term cost savings are important

### Choose Traditional When:
- Working in remote rural areas
- Significant ground obstacles exist
- Equipment access is limited
- Budget is extremely constrained
- Project scale is very small

## Conclusion

While traditional excavation has its place, trenchless technology represents the future of underground infrastructure development. Its superior performance in cost, time, quality, and environmental impact makes it the preferred choice for modern projects, especially in urban areas.

At Maranti Trenchlesindo, we leverage trenchless technology to deliver projects that are faster, safer, more economical, and more environmentally responsible.
    `,
    category: "industry-insights",
    author: "Eng. Ahmad Wijaya",
    date: "2026-04-01",
    readTime: 9,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663553601603/LEZSPyR7S5GiW2ZgZCtG9u/process-timeline-cDX7iMKe7ox6qLN9B9yA3H.webp",
    tags: ["trenchless", "comparison", "industry-insights", "technology"],
  },
  {
    id: "wastewater-system-surabaya",
    title: "Case Study: Modern Wastewater System for Surabaya's Growing Districts",
    excerpt: "Discover how we designed and implemented a comprehensive wastewater collection system for Surabaya using advanced trenchless techniques, serving over 100,000 residents.",
    content: `
# Case Study: Modern Wastewater System for Surabaya's Growing Districts

## Project Overview

**Client**: Surabaya Water and Sanitation Authority (PDAM Surabaya)
**Location**: East Surabaya, Indonesia
**Project Duration**: 24 months
**Pipeline Diameter**: 300-600mm
**Total Length**: 8.5 kilometers
**Method**: Pipe Jacking and Guided Auger Boring
**Population Served**: 100,000+ residents

## Background

Surabaya's rapid urban growth created an urgent need for expanded wastewater infrastructure. The existing system was inadequate, leading to environmental concerns and public health issues. The challenge was to install a modern collection system in a densely populated area with minimal disruption.

## Challenges

1. **Dense Urban Environment**: Congested streets with limited space
2. **Existing Utilities**: Complex network of water, electricity, and telecommunications
3. **Soft Ground Conditions**: Alluvial soils requiring specialized techniques
4. **Environmental Sensitivity**: Proximity to residential areas
5. **Tight Timeline**: Need for rapid completion

## Solution Design

### Phased Approach
- Phase 1: Main trunk lines (4.2 km)
- Phase 2: Secondary collection lines (4.3 km)
- Phase 3: Connection and testing

### Technology Selection
- Slurry shield TBM for main lines
- Guided auger boring for secondary lines
- Microtunneling for constrained areas

### Ground Support Strategy
- Slurry pressure balancing
- Injection grouting
- Real-time settlement monitoring

## Implementation Highlights

### Phase 1: Main Trunk Lines
- 4 jacking stations strategically located
- Average daily progress: 32 meters
- Zero safety incidents
- 100% quality compliance

### Phase 2: Secondary Collection Lines
- 6 additional jacking stations
- Guided auger boring for 2.1 km
- Coordination with existing utilities
- Minimal surface disruption

### Phase 3: Integration and Testing
- Connection of all lines
- Pressure testing and cleaning
- System commissioning
- Training of operations staff

## Results

✓ **8.5 km of pipeline** successfully installed
✓ **100,000+ residents** now served
✓ **Zero environmental incidents**
✓ **On-time completion** despite challenges
✓ **Cost savings** of 12% through efficient planning

## Key Performance Metrics

| Metric | Value |
|--------|-------|
| Pipeline Installed | 8.5 km |
| Pipe Segments | 2,100+ |
| Jacking Stations | 10 |
| Average Daily Progress | 30 meters |
| Safety Incidents | 0 |
| Quality Defects | 0 |
| Environmental Incidents | 0 |

## Environmental Impact

- **Reduced Surface Disruption**: Only 10 small shafts vs. 8.5 km of open trenches
- **Pollution Prevention**: Proper wastewater treatment now available
- **Community Health**: Improved sanitation for 100,000+ residents
- **Environmental Protection**: Prevention of groundwater contamination

## Client Testimonial

"This project transformed our wastewater infrastructure. Maranti Trenchlesindo's expertise, professionalism, and commitment to quality were exceptional. They delivered a world-class system that will serve our city for decades." — Director, PDAM Surabaya

## Lessons Learned

1. **Comprehensive Planning**: Detailed pre-project investigation is crucial
2. **Phased Approach**: Breaking projects into phases improves management
3. **Technology Selection**: Matching technology to site conditions ensures success
4. **Community Engagement**: Regular communication with residents reduces concerns
5. **Quality Focus**: Strict quality control ensures long-term reliability

## Conclusion

This project demonstrates our capability to handle large-scale, complex wastewater infrastructure projects. Our combination of advanced technology, skilled personnel, and project management expertise ensures successful delivery of critical infrastructure that serves communities for generations.
    `,
    category: "case-study",
    author: "Project Manager: Hendra Kusuma",
    date: "2026-03-28",
    readTime: 11,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663553601603/LEZSPyR7S5GiW2ZgZCtG9u/services-pipe-jacking-K3rBLekiUHQa5bGFQ3j6F3.webp",
    tags: ["case-study", "wastewater", "surabaya", "infrastructure"],
  },
  {
    id: "safety-standards-trenchless",
    title: "Safety Standards in Trenchless Construction: Protecting Your Team",
    excerpt: "Learn about the critical safety standards and protocols that ensure worker protection in trenchless construction. Understand HSE best practices, equipment requirements, and emergency procedures.",
    content: `
# Safety Standards in Trenchless Construction: Protecting Your Team

## Introduction

Safety is paramount in trenchless construction. While trenchless methods are generally safer than traditional excavation, they still present unique hazards that require comprehensive safety protocols and training.

## Key Hazards in Trenchless Construction

### Confined Space Hazards
- Limited oxygen
- Toxic gas accumulation
- Pressure-related injuries
- Rescue difficulties

### Ground-Related Hazards
- Ground collapse
- Slurry inflow
- Pressure imbalances
- Settlement and subsidence

### Equipment Hazards
- High-pressure systems
- Moving machinery
- Electrical hazards
- Noise and vibration

### Personnel Hazards
- Struck-by incidents
- Caught-in incidents
- Falls from height
- Repetitive strain injuries

## Safety Standards and Regulations

### International Standards
- ISO 13379: Trenchless Technologies - Safety Requirements
- ASTM F2561: Standard Practice for Safe Excavation and Backfilling

### Indonesian Regulations
- Indonesian Labor Law (Law No. 1 of 1970)
- Government Regulation No. 50 of 2012 on Occupational Safety Management
- SNI (Indonesian National Standards) for construction safety

## Essential Safety Protocols

### Pre-Project Planning
1. **Hazard Identification**: Comprehensive risk assessment
2. **Safety Plan Development**: Detailed procedures for all operations
3. **Equipment Inspection**: Verification of all equipment functionality
4. **Personnel Training**: Specialized training for all workers
5. **Emergency Response**: Established procedures and equipment

### During Construction

#### Confined Space Entry
- Atmospheric testing before entry
- Continuous monitoring during work
- Rescue equipment on standby
- Trained rescue personnel present

#### Ground Support
- Real-time pressure monitoring
- Slurry management systems
- Settlement monitoring
- Immediate response to anomalies

#### Equipment Operation
- Certified equipment operators
- Regular maintenance schedules
- Safety interlocks and alarms
- Emergency shutdown systems

#### Personal Protective Equipment (PPE)
- Hard hats with chin straps
- Safety harnesses for heights
- Respiratory protection when needed
- High-visibility clothing
- Steel-toed boots

### Post-Project
- Equipment decontamination
- Incident documentation
- Safety performance review
- Lessons learned documentation

## Training Requirements

### Operator Training
- Equipment-specific certification
- 40+ hours of formal training
- Hands-on supervised experience
- Annual refresher training

### Safety Officer Training
- OSHA or equivalent certification
- Site-specific hazard training
- Emergency response training
- 16+ hours of formal training

### General Worker Training
- Orientation and induction
- Hazard recognition
- Emergency procedures
- 8+ hours of formal training

## Emergency Response Procedures

### Confined Space Rescue
1. Immediate evacuation of affected personnel
2. Activation of emergency response team
3. Rescue operations by trained personnel
4. Medical evaluation and treatment
5. Incident investigation and reporting

### Ground Collapse
1. Immediate work stoppage
2. Evacuation of personnel
3. Assessment of situation
4. Stabilization measures
5. Controlled resumption of work

### Pressure-Related Incidents
1. Immediate pressure relief
2. Personnel evacuation
3. Medical evaluation
4. Equipment inspection
5. Incident investigation

## Safety Performance Metrics

### Key Performance Indicators (KPIs)
- Total Recordable Incident Rate (TRIR)
- Lost Time Injury Frequency (LTIF)
- Near-miss reporting rate
- Safety training completion rate
- Equipment inspection compliance

### Targets
- TRIR: < 5 per 200,000 work hours
- LTIF: < 2 per 1,000,000 work hours
- Near-miss reporting: > 10 per 100 workers
- Training compliance: 100%

## Case Study: Safety Excellence

At Maranti Trenchlesindo, we maintain an exceptional safety record:
- Zero fatalities in 15+ years of operation
- TRIR consistently below 2
- 100% safety training compliance
- Comprehensive incident investigation

## Conclusion

Safety in trenchless construction is achieved through comprehensive planning, proper training, rigorous protocols, and continuous monitoring. By implementing these standards, we protect our personnel and ensure successful project completion.

At Maranti Trenchlesindo, we are committed to maintaining the highest safety standards in all our operations.
    `,
    category: "best-practices",
    author: "Safety Director: Bambang Suryanto",
    date: "2026-03-25",
    readTime: 8,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663553601603/LEZSPyR7S5GiW2ZgZCtG9u/hero-trenchless-machinery-idRWeeKs9n66Qd293nwv43.webp",
    tags: ["safety", "hse", "best-practices", "standards"],
  },
];

export function getArticleById(id: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.id === id);
}

export function getArticlesByCategory(category: string): BlogArticle[] {
  return blogArticles.filter((article) => article.category === category);
}

export function searchArticles(query: string): BlogArticle[] {
  const lowerQuery = query.toLowerCase();
  return blogArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.excerpt.toLowerCase().includes(lowerQuery) ||
      article.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getRelatedArticles(articleId: string, limit: number = 3): BlogArticle[] {
  const article = getArticleById(articleId);
  if (!article) return [];

  return blogArticles
    .filter(
      (a) => a.id !== articleId && a.category === article.category
    )
    .slice(0, limit);
}
