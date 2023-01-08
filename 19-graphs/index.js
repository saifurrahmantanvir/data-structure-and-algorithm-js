/* Graph */
class Graph {
   constructor() {
      this.adjacencyList = {}
   }

   addVertex(vertex) {
      if (!this.adjacencyList[vertex])
         this.adjacencyList[vertex] = []
   }

   addEdge(v1, v2) {
      this.adjacencyList[v1].push(v2)
      this.adjacencyList[v2].push(v1)
   }

   removeEdge(v1, v2) {
      this.adjacencyList[v1] = this.adjacencyList[v1]
         .filter(vertex => vertex !== v2)

      this.adjacencyList[v2] = this.adjacencyList[v2]
         .filter(vertex => vertex !== v1)
   }

   removeVertex(vertex) {
      this.adjacencyList[vertex].forEach(
         v => this.removeEdge(vertex, v)
      );

      delete this.adjacencyList[vertex]
   }

   recursiveDepthFirst(start) {
      const result = [], visited = {};
      const adjacencyList = this.adjacencyList;

      function traverse(vertex) {
         if (!vertex) return null

         result.push(vertex)
         visited[vertex] = true;

         adjacencyList[vertex].forEach(neighbor => {
            if (!visited[neighbor]) {
               return traverse(neighbor)
            }
         })
      }

      traverse(start)

      return result
   }

   iterativeDepthFirst(start) {
      const result = [], visited = {}, stack = [];

      stack.push(start)
      visited[start] = true;

      let vertex;

      while (stack.length) {
         vertex = stack.pop()
         result.push(vertex)

         this.adjacencyList[vertex].forEach(neighbor => {
            if (!visited[neighbor]) {
               visited[neighbor] = true;
               stack.push(neighbor)
            }
         })
      }

      return result
   }

   breadthFirst(start) {
      const result = [], visited = {}, queue = [];

      queue.push(start)
      visited[start] = true;

      let vertex;

      while (queue.length) {
         vertex = queue.shift()
         result.push(vertex)

         this.adjacencyList[vertex].forEach(neighbor => {
            if (!visited[neighbor]) {
               visited[neighbor] = true;
               queue.push(neighbor)
            }
         })
      }

      return result;
   }
}

const graph = new Graph()

/* graph.addVertex('Tokyo')
graph.addVertex('Nairobi')
graph.addVertex('Danver')

graph.addEdge('Tokyo', 'Nairobi')
graph.addEdge('Nairobi', 'Danver')

graph.removeEdge('Nairobi', 'Danver')

graph.removeVertex('Nairobi') */

/* Graph Traversal */
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')

console.log(graph.recursiveDepthFirst('A'))
console.log(graph.iterativeDepthFirst('A'))

console.log(graph.breadthFirst('A'))
