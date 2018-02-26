/* @internal */
namespace ts {
    export function getInfoDiagnostics(sourceFile: SourceFile, _program: Program, _cancellationToken: CancellationToken): Diagnostic[] {
        return sourceFile.commonJsModuleIndicator
            ? [createDiagnosticForNode(sourceFile.commonJsModuleIndicator, Diagnostics.File_is_a_CommonJS_module_it_may_be_converted_to_an_ES6_module)]
            : emptyArray;
    }
}
