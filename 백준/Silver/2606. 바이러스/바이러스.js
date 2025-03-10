const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

const computers = Number(input.shift());
const pairs = Number(input.shift());
const connections = input.map(line => line.split(' ').map(Number));

// console.log(connections)

const graph = Array.from({length: computers + 1}, () => []);

// console.log(graph);

connections.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
})

// console.log(graph);


const visited = Array.from(Array(computers + 1), () => 0)

// console.log(visited);

function dfs(v) {
    visited[v] = 1; // 방문 표시

    graph[v].forEach(next => {
        if (!visited[next]) {
            dfs(next);
        }
    })
    // console.log(visited);
}

dfs(1);

const result = visited.filter(v => v).length - 1;

console.log(result);


