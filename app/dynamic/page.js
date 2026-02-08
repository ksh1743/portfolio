import Image from 'next/image';
import Link from 'next/link';

export default function DynamicProjectPage() {
  
  // [내용 수정] 여기에 프로젝트 설명을 적으세요.
  const projectInfo = {
    title: "DYNAMICACTIVITY",
    subtitle: "Cultural Center / Seoul / 2024",
    concept: "This project explores the relationship between movement and static form. The curved lines represent the flow of people in the city.",
    // 메인 이미지는 아까 쓰던걸 그대로 씁니다. 나중에 다른 걸로 바꾸세요.
    mainImage: "/logo-dynamic.png", 
    // 추가 이미지들 (없으면 dynamic.jpg를 반복해서 씁니다)
    gallery: [
      "/logo-dynamic.png",
      "/logo-dynamic.png",
      "/logo-dynamic.png"
    ]
  };

  return (
    <main className="min-h-screen w-full bg-white text-neutral-900 pb-20">
      
      {/* 1. 네비게이션 (뒤로가기) */}
      <nav className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center mix-blend-difference text-white">
        <Link href="/" className="text-xs font-mono tracking-widest hover:opacity-50 transition-opacity">
          ← BACK TO MAIN
        </Link>
        <span className="text-xs font-mono tracking-widest">
          PROJECT 01
        </span>
      </nav>




      {/* 2. 헤더 & 메인 이미지 */}
      <header className="w-full h-[70vh] relative">
        <Image
          src={projectInfo.mainImage}
          alt="Main View"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 p-6 md:p-12 text-white bg-gradient-to-t from-black/50 to-transparent w-full">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2">
            {projectInfo.title}
          </h1>
          <p className="text-sm font-mono tracking-widest opacity-80">
            {projectInfo.subtitle}
          </p>
        </div>
      </header>


      {/* 3. 프로젝트 설명 (Concept) */}
      <section className="max-w-4xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-12 border-b border-neutral-100">
        <div className="md:w-1/3">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400 mb-4">
            Concept
          </h2>
          <div className="w-8 h-[1px] bg-black"></div>
        </div>
        <div className="md:w-2/3">
          <p className="text-lg md:text-xl font-light leading-relaxed text-neutral-800">
            {projectInfo.concept}
          </p>
          <p className="mt-6 text-sm text-neutral-500 leading-loose">
            (여기에 더 자세한 설명을 적으세요.)
          </p>
        </div>
      </section>


      {/* 4. 갤러리 (이미지 그리드) */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {projectInfo.gallery.map((img, index) => (
            <div key={index} className={`relative w-full h-[400px] bg-neutral-100 ${index === 2 ? 'md:col-span-2 h-[600px]' : ''}`}>
              <Image
                src={img}
                alt={`Detail ${index}`}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          ))}
        </div>
      </section>


      {/* 5. 하단 네비게이션 */}
      <footer className="flex justify-center py-20">
        <Link href="/architecture" className="text-sm font-mono tracking-widest text-neutral-400 hover:text-black transition-colors">
          NEXT PROJECT →
        </Link>
      </footer>

    </main>
  )
}