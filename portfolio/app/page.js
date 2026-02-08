import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  
  const projects = [
    {
      id: 1,
      title: "DYNAMIC",
      src: "/logo-dynamic.png", 
      link: "/dynamic"
    },
    {
      id: 2,
      title: "ARCHITECTURE",
      src: "/logo-static.png",
      link: "/architecture"
    },
    {
      id: 3,
      title: "SHARE",
      src: "/logo-rough.png",
      link: "/share"
    },
  ];

  return (
    // [구조 변경] flex-col을 사용하여 상단-중단-하단을 명확히 나눔
    <main className="h-screen w-full bg-white flex flex-col justify-between overflow-hidden">
      
      {/* 1. Header (고정 높이) */}
      <header className="h-[10vh] flex items-center justify-center z-10">
        <h1 className="text-sm font-bold tracking-[0.5em] uppercase text-neutral-900">
          SEONGHO
        </h1>
      </header>


      {/* 2. Main Body (남은 높이 모두 차지: flex-1) */}
      <section className="flex-1 w-full flex items-center justify-center">
        
        {/* 전체 너비를 쓰되, 내용은 중앙 정렬 */}
        <div className="w-full h-full flex">
          
          {projects.map((project) => (
            // [Grid Column] 여기는 클릭되지 않는 '공간'입니다.
            <div key={project.id} className="flex-1 h-full flex items-center justify-center border-none">
              
              {/* [Clickable Area] 오직 이 'Link' 내부만 클릭됩니다. */}
              {/* 이미지 크기만큼만 영역을 잡습니다 (w-[300px] h-[300px] 등 조절 가능) */}
              <Link href={project.link} className="group relative w-[60%] max-w-[400px] aspect-square flex items-center justify-center cursor-pointer">
                
                {/* [A] 이미지 (마우스 올리면 사라짐) */}
                <div className="relative w-full h-full transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-95">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-contain" 
                  />
                </div>

                {/* [B] 텍스트 (마우스 올리면 나타남) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-2xl md:text-3xl font-thin tracking-[0.3em] text-neutral-900 uppercase">
                    {project.title}
                  </span>
                </div>

              </Link>
            </div>
          ))}

        </div>
      </section>


      {/* 3. Footer (고정 높이) */}
      <footer className="h-[10vh] flex items-center justify-center z-10 bg-white">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-[10px] text-neutral-500 font-mono tracking-widest uppercase">
          
          {/* 이메일 */}
          <a href="mailto:kshk1743@naver.com" className="hover:text-black transition-colors">
            email : kshk1743@naver.com
          </a>
          
          {/* 구분선 */}
          <span className="hidden md:block text-neutral-300">|</span>
          
          {/* 인스타그램 */}
          <a href="https://instagram.com/5e0n9h0" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
            instagram : 5e0n9h0
          </a>

        </div>
      </footer>

    </main>
  )
}