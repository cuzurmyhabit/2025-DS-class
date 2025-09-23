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

let ben = new Vertex("Ben");
let jake = new Vertex("Jake");
let joy = new Vertex("Joy");
let ivy = new Vertex("Ivy");
let elin = new Vertex("Elin");
let anna = new Vertex("Anna");
let david = new Vertex("David"); // 수정

ben.addAdjancentVertex(jake);
jake.addAdjancentVertex(ben);

ivy.addAdjancentVertex(ben);
ivy.addAdjancentVertex(joy);

joy.addAdjancentVertex(ivy);
joy.addAdjancentVertex(ben);

elin.addAdjancentVertex(ivy);
elin.addAdjancentVertex(anna);

anna.addAdjancentVertex(ben);
anna.addAdjancentVertex(elin);
anna.addAdjancentVertex(david);

david.addAdjancentVertex(anna);

console.log(anna.adjancent_vertices);
anna.removeAdjancentVertex(david);
console.log(anna.adjancent_vertices);


//Depth First Search
//Breadth First Search