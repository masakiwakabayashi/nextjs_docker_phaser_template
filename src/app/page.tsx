"use client";
import { useEffect, useRef } from "react";

export default function Home() {
  const gameArea = useRef(null);

  useEffect(() => {
    const makeGame = async () => {
      if (!gameArea.current) return;
      //Phaser.jsをここでインポートする
      const phaser = await import("phaser");
      //ゲームを作成
      const game = new phaser.Game({
        title: "テスト",
        width: 800,
        height: 600,
        parent: gameArea.current,
      });
    };
    makeGame();
  }, []);

  return <div ref={gameArea}></div>;
}