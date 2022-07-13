import React, {useState} from 'react';

export const Home = () => <h1>Home</h1>


const choices = ["石头", "剪刀", "布"]

// function getRandomInt(min:number, max:number) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function randomChoice(){
    const random = Math.floor(Math.random() * choices.length);
    return choices[random]
}

function Result(ai_choice:string, player_choice:string){
    if(ai_choice==player_choice){
        return <p>平局</p>;
    }else if ((ai_choice=="石头" && player_choice=="剪刀")||(ai_choice=="剪刀" && player_choice=="布")||(ai_choice=="布" && player_choice=="石头")){
        return <p>AI玩家胜</p>;
    }else{
        return <p>玩家胜</p>;
    }
}
export function Game() {
    const [ai_choice, set_ai_choice] = useState("空")
    const [player_choice, set_player_choice] = useState("空")
    return (
    <div>
    <h1>石头剪刀布人机大战</h1>
    <div className='result'>
        <div><h1>战果</h1></div>
        <div>AI 玩家 VS 你</div>
        <div>{ai_choice} vs {player_choice}</div>
       {Result(ai_choice, player_choice)}
    </div>
    <div className='player_button'>player button
    <button onClick={() => {set_player_choice("石头"); set_ai_choice(randomChoice())}}>石头</button>
    <button onClick={() => {set_player_choice("剪刀"); set_ai_choice(randomChoice())}}>剪刀</button>
    <button onClick={() => {set_player_choice("布"); set_ai_choice(randomChoice())}}>布</button>
    </div>
    </div>
    )
}

export const NotFound404 = () => <h1>404 not found</h1>;
