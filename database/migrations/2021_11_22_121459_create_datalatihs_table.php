<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDatalatihsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('datalatihs', function (Blueprint $table) {
            $table->id();
            $table->string('No_KK');
            $table->string('Pendidikan_Terakhir');
            $table->string('Pekerjaan');
            $table->string('TA');
            $table->string('Pendapatan');
            $table->string('Hunian');
            $table->string('Sejahtera');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('datalatihs');
    }
}
