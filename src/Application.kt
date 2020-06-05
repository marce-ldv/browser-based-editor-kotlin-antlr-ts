package com.example

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import java.io.File

fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)

@Suppress("unused") // Referenced in application.conf
@kotlin.jvm.JvmOverloads
fun Application.module(testing: Boolean = false) {
    val port = if (args.isEmpty()) 8080 else args[0].toInt()
    val server = embeddedServer(Netty, port = port) {
        routing {
            static("css") {
                files("../src/main/css")
            }
            static("js") {
                files("../dist")
            }
            static("node_modules") {
                files("../node_modules")
            }
            get("/") {
                try {
                    val text = File("../frontend/index.html").readText(Charsets.UTF_8)
                    call.respondText(text, ContentType.Text.Html)
                } catch (e: Exception) {
                    e.printStackTrace()
                }
            }
        }
    }
    server.start(wait = false)
}

