import Link from 'next/link';

// [서버 기능] 구글 시트 데이터를 가져오는 함수
async function getFiles() {
  // ▼▼▼ 여기에 아까 복사한 '구글 시트 CSV 링크'를 따옴표 안에 붙여넣으세요! ▼▼▼
  const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZDkW9VQVyzuiMu8ub56SPgReq-UfL_yXPddnqa9Y_pa058x0mZdDg6pPnwIIyZDs-qF4yH6W_3M9B/pub?output=csv"; 
  
  try {
    // cache: 'no-store' -> 저장 안 함. 즉, 매번 새로고침할 때마다 새 데이터를 가져옴 (실시간)
    const res = await fetch(GOOGLE_SHEET_URL, { cache: 'no-store' });
    
    if (!res.ok) throw new Error("데이터 불러오기 실패");

    const text = await res.text();
    
    // CSV 텍스트를 줄바꿈(\n)으로 잘라서 배열로 만듦
    const rows = text.split('\n').slice(1); // 첫 줄(헤더)은 버림
    
    // 각 줄을 쉼표(,)로 잘라서 객체로 변환
    const files = rows.map((row) => {
      // 엑셀 칸 순서대로 변수 저장 (빈 줄이 있을 수 있으니 체크)
      const cols = row.split(',');
      if (cols.length < 6) return null; // 데이터가 부족한 줄은 무시

      return {
        id: cols[0].trim(),
        date: cols[1].trim(),
        category: cols[2].trim(),
        name: cols[3].trim(),
        size: cols[4].trim(),
        url: cols[5].trim(),
      };
    }).filter(item => item !== null); // null(빈 줄) 제거

    return files.reverse(); // 최신 파일이 위로 오게 뒤집기
  } catch (error) {
    console.error(error);
    return []; // 에러 나면 빈 목록 보여줌
  }
}

export default async function SharePage() {
  
  // 서버에서 파일 리스트를 가져옴
  const files = await getFiles();

  return (
    <main className="min-h-screen w-full bg-white flex flex-col items-center py-20 px-6">
      
      {/* Header */}
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

      {/* File List Table */}
      <section className="w-full max-w-4xl flex-grow">
        
        {/* 헤더 */}
        <div className="hidden md:grid grid-cols-12 gap-4 text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4 px-4">
          <div className="col-span-2">Date</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-6">File Name</div>
          <div className="col-span-2 text-right">Size</div>
        </div>

        {/* 리스트 출력 */}
        <div className="flex flex-col gap-2">
          {files.length > 0 ? (
            files.map((file, index) => (
              <a 
                key={index} 
                href={file.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center py-4 px-4 border-t border-neutral-100 hover:bg-neutral-50 transition-colors duration-300 cursor-pointer"
              >
                <div className="col-span-12 md:col-span-2 text-[10px] font-mono text-neutral-400">
                  {file.date}
                </div>
                <div className="col-span-12 md:col-span-2">
                  <span className="px-2 py-1 text-[10px] font-bold border border-neutral-200 rounded-full text-neutral-600 group-hover:border-black group-hover:text-black transition-colors">
                    {file.category}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-6 text-sm font-medium text-neutral-800 group-hover:underline decoration-1 underline-offset-4">
                  {file.name}
                </div>
                <div className="col-span-2 flex justify-between md:justify-end items-center gap-4">
                  <span className="text-[10px] font-mono text-neutral-400">{file.size}</span>
                  <svg className="w-4 h-4 text-neutral-300 group-hover:text-black transform group-hover:translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
              </a>
            ))
          ) : (
            <div className="py-20 text-center text-sm font-mono text-neutral-400">
              데이터를 불러오는 중이거나 파일이 없습니다.
            </div>
          )}
        </div>

      </section>

      {/* Footer */}
      <footer className="w-full mt-20 flex flex-col items-center justify-center gap-4">
        <div className="text-[10px] text-neutral-300 font-mono">
          Powered by Google Sheets DB
        </div>
      </footer>

    </main>
  )
}