<template>
    <div class="calculator">
        <div id="display">
            <input type="number" class="input-numbers" v-model="current" placeholder="0">
        </div>
        <div class="grid-container">
            <div @click="clear" class="action-btn">C</div>
            <div @click="del" class="action-btn">DEL</div>
            <div @click="percent" class="action-btn">%</div>
            <div @click="divide" class="operation-btn">÷</div>
            <div @click="append('7')" class="num-btn">7</div>
            <div @click="append('8')" class="num-btn">8</div>
            <div @click="append('9')" class="num-btn">9</div>
            <div @click="multiply" class="operation-btn">x</div>
            <div @click="append('4')" class="num-btn">4</div>
            <div @click="append('5')" class="num-btn">5</div>
            <div @click="append('6')" class="num-btn">6</div>
            <div @click="subtract" class="operation-btn">-</div>
            <div @click="append('1')" class="num-btn">1</div>
            <div @click="append('2')" class="num-btn">2</div>
            <div @click="append('3')" class="num-btn">3</div>
            <div @click="add" class="operation-btn">+</div>
            <div @click="append('0')" id="zero" class="num-btn">0</div>
            <div @click="dot()" class="num-btn">.</div>
            <div @click="equals" class="operation-btn">=</div>
        </div>
    </div>
    <History v-bind:history="history"/>
</template>

<script>
import History from "./History.vue";
export default {
    data() {
        return {
            current: '',
            previous: '',
            operator: '',
            result: '',
            history: [],
        }
    },
    components: {
        History,
    },
    methods: {
        clear() {
            this.current = '';
        },
        del() {
            this.current = this.current.slice(0, -1);
        },
        percent() {
            this.current = parseFloat(this.current/100);
        },
        append(number) {
            this.current = this.current.concat(number);
        },
        dot() {
            if (!this.current.includes('.')) {
                this.append('.');
            }
        },
        divide() {
            this.operator = '/';
            this.previous = this.current;
            this.clear();
        },
        multiply() {
            this.operator = '*';
            this.previous = this.current;
            this.clear();
        },
        subtract() {
            this.operator = '-';
            this.previous = this.current;
            this.clear();
        },
        add() {
            this.operator = '+';
            this.previous = this.current;
            this.clear();
        },
        equals() {
            this.result = eval(this.previous + this.operator + this.current);
            this.history.push(this.previous + " " + this.operator + " " + this.current + " = " + this.result);
            this.current = this.result;
        }
    }
}
</script>

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