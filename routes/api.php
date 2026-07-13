Route::get('/quiz4-data', function () {
    $models = DB::table('model_kits')->get();
    return response()->json($models);
});