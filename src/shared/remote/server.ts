import rpc from "vscode-jsonrpc";
import merlin from "../merlin";
import types from "../types";

export const giveCaseAnalysis =
  new rpc.RequestType<types.ITextDocumentRange, null | merlin.Case.Destruct, void, void>("reason.server.giveCaseAnalysis");

export const giveMerlinFiles =
  new rpc.RequestType<types.TextDocumentIdentifier, string[], void, void>("reason.server.giveMerlinFiles");

export const giveFormatted =
  new rpc.RequestType<types.IUnformattedTextDocument, null | string, void, void>("reason.server.giveFormatted");
