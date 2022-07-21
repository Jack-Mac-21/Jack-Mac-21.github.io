
visitedNodes = {}
totalVisitedNodes = {}
tempDisjoinOuputNodes = {}
tempDisjointOutputedges = {}

def walkThroughGraph(node, edges, nodes):
    visitedNodes.insert(node)
    for edge in edges:
        if node in edge:
            if edge[0] != node and edge[1] not in visitedNodes:
                edges.insert(edge)
                walkThroughGraph(edge[1])
            else if edge[0] not in visitedNodes:
                edges.insert(edge)
                walkThroughGraph(edge[0])

def findDisjointGraphs(edges, nodes):
    final_ouput = []
    currNode = node[0]

    while nodes != totalVisitedNodes:
        walkThroughGraph(currNode, edges, nodes)
        final_ouput.append(tempDisjointOutputedges)
        tempDisjoinOuputNodes = {}
        tempDisjointOutputedges = {}
        for node in nodes:
            if node not in totalVisitedNodes:
                currNode = node

    return final_ouput

if findDisjointGraphs(edges, nodes) == [x, y]:
    print(findDisjointGraphs(edges, nodes))
    return True
else:
    return False

def 
