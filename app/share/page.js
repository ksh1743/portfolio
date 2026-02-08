import Link from 'next/link';

export default function SharePage() {
  
  // [파일 리스트 관리]
  // 파일이 없으면 화면이 비어보이니 예시 데이터를 넣어뒀습니다.
  const files = [
    {
      id: 1,
      date: "2024.02.09",
      category: "CAD",
      name: "Sample_Plan_v1.dwg",
      size: "12.5 MB",
      url: "#" // 나중에 실제 파일 링크로 바꾸세요
    },
    {
      id: 2,
      date: "2024.02.01",
      category: "TEXTURE",
      name: "Concrete_Rough_4K.jpg",
      size: "24.1 MB",
      url: "#" 
    },
  ];

  return (
    <main className="min-h-screen w-full bg-white flex flex-col items-center py-20 px-6">
      
      {/* 1. Header: 뒤로가기 & 타이틀 */}
      <div className="w-full max-w-4xl flex justify-between items-end mb-20 border-b border-neutral-900 pb-4">
        <div className="flex flex-col">
          <Link href="/" className="text-xs font-mono text-neutral-400 hover:text-black mb-4 transition-colors">
            ← BACK TO MAIN
          </Link>
          <h1 className="text-4xl font-black tracking-widest uppercase text-neutral-900">
            ARCHIVE
          </h1>
        </div>
        <span className="text-xs font-mono text-neutral-500 mb-1">
          Total {files.length} Files
        </span>
      </div>

      {/* 2. File List Table */}
      <section className="w-full max-w-4xl flex-grow">
        
        {/* 리스트 헤더 (모바일에서는 숨김) */}
        <div className="hidden md:grid grid-cols-12 gap-4 text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4 px-4">
          <div className="col-span-2">Date</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-6">File Name</div>
          <div className="col-span-2 text-right">Size</div>
        </div>

        {/* 파일 아이템들 */}
        <div className="flex flex-col gap-2">
          {files.map((file) => (
            <a 
              key={file.id} 
              href={file.url} 
              download 
              className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center py-4 px-4 border-t border-neutral-100 hover:bg-neutral-50 transition-colors duration-300 cursor-pointer"
            >
              
              {/* 날짜 */}
              <div className="col-span-12 md:col-span-2 text-[10px] font-mono text-neutral-400">
                {file.date}
              </div>
              
              {/* 카테고리 뱃지 */}
              <div className="col-span-12 md:col-span-2">
                <span className="px-2 py-1 text-[10px] font-bold border border-neutral-200 rounded-full text-neutral-600 group-hover:border-black group-hover:text-black transition-colors">
                  {file.category}
                </span>
              </div>
              
              {/* 파일 이름 */}
              <div className="col-span-10 md:col-span-6 text-sm font-medium text-neutral-800 group-hover:underline decoration-1 underline-offset-4">
                {file.name}
              </div>

              {/* 파일 용량 & 다운로드 아이콘 */}
              <div className="col-span-2 flex justify-between md:justify-end items-center gap-4">
                <span className="text-[10px] font-mono text-neutral-400">{file.size}</span>
                
                {/* 화살표 아이콘 */}
                <svg className="w-4 h-4 text-neutral-300 group-hover:text-black transform group-hover:translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>

            </a>
          ))}
        </div>

      </section>

      {/* 3. Footer: 정보 + 비밀 버튼 */}
      <footer className="w-full mt-20 flex flex-col items-center justify-center gap-4">
        
        {/* SNS 링크 */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-[10px] text-neutral-500 font-mono tracking-widest uppercase">
          <a href="mailto:kshk1743@naver.com" className="hover:text-black transition-colors">
            email : kshk1743@naver.com
          </a>
          <span className="hidden md:block text-neutral-300">|</span>
          <a href="https://instagram.com/5e0n9h0" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
            instagram : 5e0n9h0
          </a>
        </div>

        {/* [Secret Admin Link] - 깃허브 파일 관리 페이지로 이동 */}
        <a 
          href="https://github.com/ksh1743/portfolio/tree/main/public/files" 
          target="_blank" 
          className="text-[8px] text-neutral-200 hover:text-red-500 transition-colors cursor-default"
        >
          ADMIN ACCESS
        </a>

      </footer>

    </main>
  )
}