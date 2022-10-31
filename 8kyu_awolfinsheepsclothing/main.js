function warnTheSheep(queue) {
return queue[queue.length-1]!="wolf" ? `Oi! Sheep number ${queue.length-queue.findIndex(el=>el=="wolf")-1}! You are about to be eaten by a wolf!`:"Pls go away and stop eating my sheep"
}
