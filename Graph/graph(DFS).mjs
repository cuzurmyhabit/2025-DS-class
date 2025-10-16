class Vertex {
    constructor(value) {
        this.value = value;
        this.adjancent_vertices = [];
    }

    addAdjancentVertex(vertex) {
        this.adjancent_vertices.push(vertex);
    }

    removeAdjancentVertex(vertex) {
        for (let i = 0; i < this.adjancent_vertices.length; i++) {
            if (this.adjancent_vertices[i] === vertex) {
                this.adjancent_vertices.splice(i, 1);
                break;
            }
        }
    }
}

//여기 중요!!!!!!!!!!!!!!
function DFS(vertex, visited_vertices={}) {
    visited_vertices[vertex.value] = true;
    console.log(`정점 : ${vertex.value}`);

    for(let adjancent of vertex.adjancent_vertices){
        if(visited_vertices[adjancent.value] === true){
            continue;
        }
        else{
            DFS(adjancent, visited_vertices);
        }
    }
} //여기까지

let ben = new Vertex("Ben");
let ivy = new Vertex("Ivy");
let joy = new Vertex("Joy");
let jake = new Vertex("Jake");
let anna = new Vertex("Anna");
let david = new Vertex("David"); 
let elin = new Vertex("Elin");
let owen = new Vertex("Owen");

ben.addAdjancentVertex(ivy);
ben.addAdjancentVertex(jake);
ben.addAdjancentVertex(anna);
ben.addAdjancentVertex(david);

ivy.addAdjancentVertex(ben);
ivy.addAdjancentVertex(joy);

joy.addAdjancentVertex(ivy);
joy.addAdjancentVertex(jake);

jake.addAdjancentVertex(joy);
jake.addAdjancentVertex(ben);

anna.addAdjancentVertex(ben);

david.addAdjancentVertex(ben);
david.addAdjancentVertex(elin);

elin.addAdjancentVertex(david);
elin.addAdjancentVertex(owen);

owen.addAdjancentVertex(elin);


DFS(ben);