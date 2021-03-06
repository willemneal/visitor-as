"use strict";
const decorator_1 = require("../decorator");
const utils_1 = require("../utils");
class ListMembers extends decorator_1.ClassDecorator {
    visitFieldDeclaration(node) {
        if (!node.name)
            console.log(utils_1.getName(node) + "\n");
        const name = utils_1.getName(node);
        const _type = utils_1.getName(node.type);
        this.stdout.write(name + ": " + _type + "\n");
    }
    visitMethodDeclaration(node) {
        const name = utils_1.getName(node);
        if (name == "constructor") {
            return;
        }
        const sig = utils_1.getName(node.signature);
        this.stdout.write(name + ": " + sig + "\n");
    }
    visitClassDeclaration(node) {
        this.visit(node.members);
    }
    get name() { return "list"; }
}
module.exports = decorator_1.registerDecorator(new ListMembers());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlcy9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQSw0Q0FBaUU7QUFDakUsb0NBQW1DO0FBRW5DLE1BQU0sV0FBWSxTQUFRLDBCQUFjO0lBQ3RDLHFCQUFxQixDQUFDLElBQXNCO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2xELE1BQU0sSUFBSSxHQUFHLGVBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixNQUFNLEtBQUssR0FBRyxlQUFPLENBQUMsSUFBSSxDQUFDLElBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxJQUF1QjtRQUM1QyxNQUFNLElBQUksR0FBRyxlQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxJQUFJLElBQUksYUFBYSxFQUFFO1lBQ3pCLE9BQU87U0FDUjtRQUNELE1BQU0sR0FBRyxHQUFHLGVBQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELHFCQUFxQixDQUFDLElBQXNCO1FBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLElBQUksS0FBYSxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUM7Q0FFdEM7QUFFRCxpQkFBUyw2QkFBaUIsQ0FBQyxJQUFJLFdBQVcsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENsYXNzRGVjbGFyYXRpb24sXHJcbiAgRGVjb3JhdG9yTm9kZSxcclxuICBGaWVsZERlY2xhcmF0aW9uLFxyXG4gIE1ldGhvZERlY2xhcmF0aW9uLFxyXG59IGZyb20gXCIuLi8uLi9hc1wiO1xyXG5pbXBvcnQgeyBDbGFzc0RlY29yYXRvciwgcmVnaXN0ZXJEZWNvcmF0b3IgfSBmcm9tIFwiLi4vZGVjb3JhdG9yXCI7XHJcbmltcG9ydCB7IGdldE5hbWUgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmNsYXNzIExpc3RNZW1iZXJzIGV4dGVuZHMgQ2xhc3NEZWNvcmF0b3Ige1xyXG4gIHZpc2l0RmllbGREZWNsYXJhdGlvbihub2RlOiBGaWVsZERlY2xhcmF0aW9uKTogdm9pZCB7XHJcbiAgICBpZiAoIW5vZGUubmFtZSkgY29uc29sZS5sb2coZ2V0TmFtZShub2RlKSArIFwiXFxuXCIpO1xyXG4gICAgY29uc3QgbmFtZSA9IGdldE5hbWUobm9kZSk7XHJcbiAgICBjb25zdCBfdHlwZSA9IGdldE5hbWUobm9kZS50eXBlISk7XHJcbiAgICB0aGlzLnN0ZG91dC53cml0ZShuYW1lICsgXCI6IFwiICsgX3R5cGUgKyBcIlxcblwiKTtcclxuICB9XHJcblxyXG4gIHZpc2l0TWV0aG9kRGVjbGFyYXRpb24obm9kZTogTWV0aG9kRGVjbGFyYXRpb24pOiB2b2lkIHtcclxuICAgIGNvbnN0IG5hbWUgPSBnZXROYW1lKG5vZGUpO1xyXG4gICAgaWYgKG5hbWUgPT0gXCJjb25zdHJ1Y3RvclwiKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHNpZyA9IGdldE5hbWUobm9kZS5zaWduYXR1cmUpO1xyXG4gICAgdGhpcy5zdGRvdXQud3JpdGUobmFtZSArIFwiOiBcIiArIHNpZyArIFwiXFxuXCIpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRDbGFzc0RlY2xhcmF0aW9uKG5vZGU6IENsYXNzRGVjbGFyYXRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKTtcclxuICB9XHJcblxyXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcImxpc3RcIjsgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0ID0gcmVnaXN0ZXJEZWNvcmF0b3IobmV3IExpc3RNZW1iZXJzKCkpO1xyXG4iXX0=