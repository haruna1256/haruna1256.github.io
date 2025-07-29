import { useState } from 'react'
import BentoCard from './component/BentoCard'

export default function App() {
  return (
    <div className="max-w-4xl mx-auto p-4 grid grid-cols-3 gap-4">
      <BentoCard
        title="プロフィール"
        description="自己紹介やSNSリンク"
        url="https://example.com/profile"
      />
      <BentoCard
        title="制作物1"
        description="Reactで作ったポートフォリオ"
        url="https://github.com/haruna1256/bento-portfolio"
      />
      <BentoCard
        title="プレゼン資料"
        description="ゼミのスライドを公開"
        url="https://docs.google.com/presentation/..."
      />
    </div>
  );
}


