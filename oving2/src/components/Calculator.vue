<template>
    <div class="calculator">
        <div id="display">
            <input type="text" class="input-numbers" value="0">
        </div>
        <div class="grid-container">
            <div class="action-btn">C</div>
            <div class="action-btn">DEL</div>
            <div class="action-btn">%</div>
            <div class="operation-btn">÷</div>
            <div class="num-btn">7</div>
            <div class="num-btn">8</div>
            <div class="num-btn">9</div>
            <div class="operation-btn">x</div>
            <div class="num-btn">4</div>
            <div class="num-btn">5</div>
            <div class="num-btn">6</div>
            <div class="operation-btn">-</div>
            <div class="num-btn">1</div>
            <div class="num-btn">2</div>
            <div class="num-btn">3</div>
            <div class="operation-btn">+</div>
            <div id="zero" class="num-btn">0</div>
            <div class="num-btn">.</div>
            <div class="operation-btn">=</div>
        </div>
    </div>
</template>

<style>
    .calculator{
        max-width:320px;
        background: black;
    }

    .grid-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        border: 0;
    }

    .input-numbers {
        background: black;
        color: white;
        font-size: 3em;
        border: 0;
        padding: 0;
        max-width: 320px;
        text-align: right;
        height: 100px;
    }

    .num-btn {
        background-color: #505050;
        color: white;
        font-weight: bold;
        height: 65px;
        border:1px solid black;
    }

    .operation-btn {
        background: #FF9500;
        color: white;
        font-weight: bold;
        height: 65px;
        border:1px solid black;
    }

    .action-btn {
        background-color: #D4D4D2;
        color: black;
        font-weight: bold;
        height: 65px;
        border:1px solid black;
    }

    #zero {
        grid-column: span 2;
    }

    #display {
        margin: auto;
    }
</style>