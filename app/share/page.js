import Link from 'next/link';

export default function SharePage() {
  
  // [파일 리스트 관리]
  // 여기에 공유할 파일을 계속 추가하면 됩니다.
  const files = [
  
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
      <section className="w-full max-w-4xl">
        
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
            // download 속성: 클릭 시 바로 다운로드됨
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
                
                {/* 화살표 아이콘 (SVG) */}
                <svg className="w-4 h-4 text-neutral-300 group-hover:text-black transform group-hover:translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>

            </a>
          ))}
        </div>

      </section>

      {/* 3. Info Text */}
      {/* 3. Footer 수정 */}
<footer className="h-[10vh] flex flex-col items-center justify-center z-10 bg-white">
  
  {/* 기존 SNS 링크들 */}
  <div className="flex ...">
     {/* ... (생략) ... */}
  </div>

  {/* [Secret Admin Link] */}
  {/* 투명도(opacity)를 낮춰서 눈에 잘 안 띄게 만듭니다. */}
  <a 
    href="https://github.com/ksh1743/portfolio/tree/main/public/files" 
    target="_blank" 
    className="mt-4 text-[8px] text-neutral-200 hover:text-red-500 transition-colors cursor-default"
  >
    ADMIN ACCESS
  </a>

</footer>

    </main>
  )
}