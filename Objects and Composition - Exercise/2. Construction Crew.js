function conCrew(worker) {
    if(worker.dizziness){
        worker.levelOfHydrated += (0.1 * worker.weight) * worker.experience;
        worker.dizziness = false;
       return worker;
    }
    else{
        return worker;
    }
}
conCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });
conCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true });
conCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false });
