import {
  Parser,
  Tokenizer,
  Source,
  SourceKind,
  Expression,
  Statement,
  Token,
  ClassDeclaration,
  MethodDeclaration,
} from "./as";


export class SimpleParser {
  private static parser: Parser = new Parser();

  private static getTokenizer(s: string): Tokenizer {
    return new Tokenizer(new Source(SourceKind.USER, "index.ts", s));
  }

  static parseExpression(s: string): Expression {
    let res = this.parser.parseExpression(this.getTokenizer(s));
    if (res == null) {
      throw new Error("Failed to parse the expression: '" + s + "'");
    }
    return res;
  }

  static parseStatement(s: string, topLevel: boolean = false): Statement {
    let res = this.parser.parseStatement(this.getTokenizer(s), topLevel);
    if (res == null) {
      throw new Error("Failed to parse the statement: '" + s + "'");
    }
    return res;
  }

  static parseTopLevel(s: string): Statement[] {
    let tn = this.getTokenizer(s);
    let statements: Statement[] = [];
    while (!tn.skip(Token.ENDOFFILE)) {
      let statement = this.parser.parseTopLevelStatement(tn);
      if (statement) {
        statements.push(statement);
      } else {
        this.parser.skipStatement(tn);
      }
    }
    return statements;
  }

  static parseMethodDeclaration(
    s: string,
    parent: ClassDeclaration
  ): MethodDeclaration {
    let tn = this.getTokenizer(s);
    let res = this.parser.parseClassMember(tn, parent);
    if (res == null) {
      throw new Error("Failed to parse class member: '" + s + "'");
    }
    if (!(res instanceof MethodDeclaration)) {
      throw new Error("'" + s + "' is not a method declaration");
    }
    return res;
  }
}
