/**
 *
 * 0 Git
 *   1 Commit
 *   2 CommitHistory
 *   3 Branches A branch is nothing but a mere pointer to some commit. Seriously, that is it. That is what makes branches in Git so lightweight and use-n-throw type.
 *    You may say HEAD was exactly this. You are right. The only difference being that HEAD is just one (because at a given time you are only on a single commit)
 *    but branches can be many, each pointing to a commit.
 *   4 checkout
 */

//very commit should somehow know which commit was made before it.
//This brings up the concept of parent in Git. Commits in Git
//are kept together in form a data structure called Linked Lists. so add parent param

class Branch {
  constructor(name, commit) {
    this.name = name;
    this.commit = commit;
  }
}
class Commit {
  constructor(id, parent, message) {
    //id
    this.id = id;
    //commit message
    this.message = message;
    this.parent = parent;
  }
}

class Git {
  constructor(name) {
    this.name = name; //repo name
    this.branches = []; //list of all branches
    this.setDefaultBranchToMain();
    // this.HEAD = null; // a pointer reference to the last commit will be updated everytime a commit is made i.e. in the commit() function.
    //keep track of the commit ids by keeping a counter
    this.lastCommitId = -1; //defalut value is -1
  }

  //replace master to main
  setDefaultBranchToMain(branches) {
    let master = new Branch("main", null);
    this.HEAD = master;
    this.branches.push(master); //store master branch
  }
  //add the ability on our Git class to create a commit or commit (verb):
  commit(message) {
    let commitInstance = new Commit(
      ++this.lastCommitId,
      this.HEAD.commit,
      message
    );
    // Update HEAD and current branch.
    this.HEAD.commit = commitInstance;
    return commitInstance;
  }
  //record commit history
  log() {
    let history = [],
      commit = this.HEAD.commit;
    // 1. Start from last commit
    // 2. Go back tracing to the first commit
    // 3. Push in `history`
    while (commit) {
      history.push(commit);
      commit = commit.parent;
    }
    return history;
  }

  checkout(branchName) {
    for (let i = this.branches.length; i--; ) {
      if (this.branches[i].name === branchName) {
        console.log("Switched to existing branch: " + branchName);
        this.HEAD = this.branches[i];
        return this;
      }
    }
    //not found here create a new branch
    let newBranch = new Branch(branchName, this.HEAD.commit);
    //store branch
    this.branches.push(newBranch);
    //update HEAD
    this.HEAD = newBranch;

    console.log("Switched to new branch: " + branchName);
    return this;

    // Actual command:
    // > git checkout existing-branch
    // > git checkout -b new-branch
  }

  historyToIdMapper(history) {
    let ids = history.map((commit) => commit.id);
    return ids.join("-");
  }
}

var repo = new Git("first-repo");
console.log(repo);
repo.commit("first commit");
repo.commit("second commit");

repo.log();
console.log(repo);

repo.checkout("new branch");
