import { useEffect, useRef } from 'react';

export default function SplitContentLayout() {
  const containerRef = useRef(null);

  useEffect(() => {
    const contentItems = containerRef.current?.querySelectorAll('.content-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2
    });
    
    if (contentItems) {
      contentItems.forEach(item => {
        observer.observe(item);
      });
    }

    return () => {
      if (contentItems) {
        contentItems.forEach(item => {
          observer.unobserve(item);
        });
      }
    };
  }, []);

  const contentData = [
    {
      id: 1,
      position: 'left',
      icon: '📁',
      title: 'Create Portfolio',
      description: 'Showcase your best work in our sleek interface with customizable templates and client testimonials.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      position: 'right',
      icon: '👥',
      title: 'Creative Community',
      description: 'Join thousands collaborating on projects with real-time messaging and skill matching.',
      image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      position: 'left',
      icon: '🚀',
      title: 'Share Projects',
      description: 'Get feedback through our engaged community with smart tagging and analytics.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 4,
      position: 'right',
      icon: '🌐',
      title: 'Grow Network',
      description: 'Connect with professionals through our intelligent networking platform.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 5,
      position: 'left',
      icon: '🧠',
      title: 'AI Skill Builder',
      description: 'Our AI analyzes your work and suggests targeted learning to keep you ahead.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 6,
      position: 'right',
      icon: '✨',
      title: 'Smart Matching',
      description: 'Find perfect collaborators with our advanced matching system.',
      image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 7,
      position: 'left',
      icon: '🔍',
      title: 'Discover Talent',
      description: 'Browse curated collections of exceptional creatives across all disciplines.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center " style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",backgroundColor:"black"}}>
      <style jsx>{`
        .split-container {
          width: 100%;
          max-width: 100vw;
          position: relative;
          padding: 60px 20px;
        }

        .center-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: linear-gradient(to bottom, 
                    transparent 0%, 
                    rgba(59, 130, 246, 0.8) 20%, 
                    rgba(59, 130, 246, 0.8) 80%, 
                    transparent 100%);
          z-index: 1;
        }

        .content-item {
          width: 50%;
          padding: 30px;
          box-sizing: border-box;
          position: relative;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
          overflow: hidden;
          border-radius: 12px;
        }

        .content-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .left-item {
          margin-right: auto;
          padding-right: 50px;
          margin-bottom: 60px;
        }

        .right-item {
          margin-left: auto;
          padding-left: 50px;
          margin-bottom: 60px;
        }

        .content-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
          opacity: 0.3;
          filter: brightness(0.7) contrast(1.2);
        }

        .content-wrapper {
          position: relative;
          z-index: 2;
          max-width: 500px;
        }

        .left-item .content-wrapper {
          margin-left: auto;
          text-align: right;
        }

        .right-item .content-wrapper {
          text-align: left;
        }

        .icon {
          width: 50px;
          height: 50px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          margin-bottom: 20px;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        .left-item .icon {
          margin-left: auto;
        }

        .content-title {
          font-size: 1.8rem;
          margin-bottom: 15px;
          position: relative;
          display: inline-block;
        }

        .content-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          height: 3px;
          width: 40px;
          background: linear-gradient(90deg, #3b82f6, #93c5fd);
        }

        .left-item .content-title::after {
          right: 0;
        }

        .right-item .content-title::after {
          left: 0;
        }

        .content-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .content-item {
            width: 90%;
            padding: 25px;
          }
          
          .left-item, .right-item {
            margin-left: auto;
            margin-right: auto;
            padding: 25px;
            text-align: left !important;
          }
          
          .left-item .icon,
          .right-item .icon {
            margin-left: 0;
          }
          
          .left-item .content-title::after,
          .right-item .content-title::after {
            left: 0;
            right: auto;
          }
        }
      `}</style>
      
      <div className="split-container" ref={containerRef}>
        <div className="center-line"></div>
        
        {contentData.map((item, index) => (
          <div 
            key={item.id} 
            className={`content-item ${item.position}-item ${index === 0 ? 'visible' : ''}`}
          >
            <img 
              className="content-bg" 
              src={item.image} 
              alt={item.title}
            />
            <div className="content-wrapper">
              <div className="icon">{item.icon}</div>
              <h2 className="content-title">{item.title}</h2>
              <p className="content-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}